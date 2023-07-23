import { createPageInDb } from 'features/core/notion'

import { WakaTimeClient } from 'shared/lib/waka/waka'

import { Client } from '@notionhq/client'
import { prisma } from 'server/prisma'

export interface IProject {
	endDate?: string
	hours: number
	minutes: number
	relation: string
	startDate: string
	title: string
}

export const schedule = async () => {
	const users = await prisma.user.findMany({
		select: {
			notion: {
				select: { accessToken: true, data: { where: { isEnable: true, title: 'Days' } } },
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
		const { accessToken, data } = notion

		const { wakaApiKey } = wakaTime

		const wakaClient = new WakaTimeClient(wakaApiKey)

		const statusBar = await wakaClient.getStatusBar()

		const database = await data.map(async ({ id, notionId, title }) => {
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

		await Promise.all(database)
	})

	const data = await Promise.all(scheduleArr)

	return data
}
