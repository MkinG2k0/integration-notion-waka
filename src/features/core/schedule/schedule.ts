import { createPageInDb } from 'features/core/notion'

import { WakaTimeClient } from 'shared/lib/waka/waka'

import { NotionUnit } from 'prisma-types'
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
	const start = Date.now()
	const users = await prisma.user.findMany({
		select: {
			notion: {
				select: { accessToken: true, units: { where: { isEnable: true, title: 'Days' } } },
			},
			wakaTime: {
				select: { wakaApiKey: true },
			},
		},
		where: {},
	})

	users.map(async ({ notion, wakaTime }) => {
		if (!notion || !wakaTime) {
			return
		}

		const { wakaApiKey } = wakaTime
		const { accessToken, units } = notion

		if (wakaApiKey === '') {
			return
		}

		const wakaClient = new WakaTimeClient(wakaApiKey)

		const notionClient = new Client({ auth: accessToken })

		await createPages(wakaClient, notionClient, units)
	})

	const end = Date.now()

	const rangeTime = (end - start) / 1000
	return rangeTime
}

export const createPages = async (
	wakaClient: WakaTimeClient,
	notionClient: Client,
	units: NotionUnit[],
) => {
	const statusBar = await wakaClient.getStatusBar().catch(() => false)

	if (typeof statusBar === 'boolean') {
		return
	}

	units.map(async ({ dataId }) => {
		statusBar.data.projects.map(async ({ hours, minutes, name, text, total_seconds }) => {
			const project: IProject = {
				hours,
				minutes,
				relation: name,
				startDate: new Date().toISOString(),
				title: name,
			}
			await createPageInDb(notionClient, dataId, project)
		})
	})
}
