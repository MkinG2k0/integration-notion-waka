import { IProject } from 'features/core/schedule/schedule'

import { Client } from '@notionhq/client'
import dayjs from 'dayjs'

export const createPageInDb = async (
	notionClient: Client,
	database_id: string,
	project: IProject,
) => {
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
