import { WakaTimeClient } from 'shared/lib/waka/waka'

import { Client } from '@notionhq/client'
import { prisma } from 'server/prisma'
import dayjs from 'dayjs'

export const schedule = async () => {
	const users = await prisma.user.findMany({
		select: {
			notion: {
				select: { accessToken: true, databases: { where: { isEnable: true, title: 'Days' } } },
			},
			wakaTime: {
				select: { wakaApiKey: true },
			},
		},
		where: {},
	})

	const scheduleArr = users.map(async ({ notion, wakaTime }) => {
		if (!notion || !wakaTime) {
			return
		}
		const { accessToken, databases } = notion

		const { wakaApiKey } = wakaTime

		const wakaClient = new WakaTimeClient(wakaApiKey)

		const statusBar = await wakaClient.getStatusBar()

		const data = await databases.map(async ({ id, notionId, title }) => {
			const createProjects = await statusBar.data.projects.map(
				async ({ hours, minutes, name, text, total_seconds }) => {
					const project: IProject = {
						hours,
						minutes,
						relation: name,
						startDate: new Date().toISOString(),
						title: name,
					}

					const notionClient = new Client({ auth: accessToken })

					await createPageInDb(notionClient, id, project)
				},
			)
			await Promise.all(createProjects)
		})

		await Promise.all(data)
	})

	const data = await Promise.all(scheduleArr)

	return data
}
interface IProject {
	endDate?: string
	hours: number
	minutes: number
	relation: string
	startDate: string
	title: string
}

const createPageInDb = async (notionClient: Client, database_id: string, project: IProject) => {
	const { endDate, hours, minutes, relation, startDate, title } = project

	const time = hours * 60 + minutes

	const formatDate = dayjs(startDate).format('DD/MM/YYYY')
	const customId = `${title}:${formatDate}`

	const searchDay = await notionClient.databases.query({
		database_id,
		filter: { property: 'waka_id', rich_text: { equals: customId } },
	})
	const isFind = searchDay.results[0]

	if (isFind) {
		const data = await notionClient.pages.update({
			page_id: isFind.id,
			properties: {
				Date: { date: { start: startDate } },
				hours: { number: hours },
				minutes: { number: minutes },
				time: { number: time },
				title: { title: [{ text: { content: title } }] },
				waka_id: { rich_text: [{ text: { content: customId } }] },
			},
		})

		return data
	}

	const data = await notionClient.pages.create({
		children: [
			{ heading_3: { rich_text: [{ text: { content: 'Выполненные задачи' } }] } },
			{ to_do: { checked: false, rich_text: [{ text: { content: '' } }] } },
			{ to_do: { checked: false, rich_text: [{ text: { content: '' } }] } },
			{ to_do: { checked: false, rich_text: [{ text: { content: '' } }] } },
		],
		icon: {
			emoji: '🕒',
			type: 'emoji',
		},
		parent: { database_id },
		properties: {
			Date: { date: { start: startDate } },
			hours: { number: hours },
			minutes: { number: minutes },
			time: { number: time },
			title: { title: [{ text: { content: title } }] },
			waka_id: { rich_text: [{ text: { content: customId } }] },
		},
	})
	return data
}
