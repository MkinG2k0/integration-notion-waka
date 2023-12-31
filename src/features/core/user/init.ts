import { Client } from '@notionhq/client'
import { prisma } from 'server/prisma'

export interface IAccount {
	access_token: string
	providerAccountId: string
	workspace_id: string
	workspace_name: string
}

const countTables = 3

export const userInit = async (account: IAccount) => {
	const { access_token, providerAccountId, workspace_id, workspace_name } = account

	const user = await prisma.user.findUnique({
		select: { notion: true },
		where: { providerAccountId },
	})

	if (user) {
		return
	}

	const notionClient = new Client({
		auth: access_token,
	})

	const data = await notionClient.search({})

	const units = data.results
		.filter(({ object }) => object === 'database')
		.map((data) => {
			if (!('title' in data)) {
				return
			}

			const { id, title } = data

			const normTitle = title[0].plain_text
			return { dataId: id, title: normTitle, type: 'database' }
		})
		.filter(Boolean)

	if (units.length < countTables) {
		setTimeout(() => {
			userInit(account)
		}, 500)
		return
	}

	const newUser = await prisma.user.create({
		data: {
			name: workspace_name,
			notion: {
				create: {
					accessToken: access_token,
					id: providerAccountId,
					units: { create: units },
					workspaceId: workspace_id,
				},
			},
			providerAccountId,
			wakaTime: {
				create: { wakaApiKey: '' },
			},
		},
	})
}

export interface DataBase {
	archived: false
	cover: null
	created_by: { id: string; object: string }
	created_time: string
	description: []
	icon: null
	id: string
	is_inline: true
	last_edited_by: { id: string; object: string }
	last_edited_time: string
	object: 'database'
	parent: {
		page_id: string
		type: string
	}
	properties: {
		Day: [object]
		Name: [object]
		Status: [object]
		projects: [object]
	}
	public_url: null
	title: [
		{
			annotations: {
				bold: false
				code: false
				color: 'default'
				italic: false
				strikethrough: false
				underline: false
			}
			href: null
			plain_text: string
			text: { content: string; link: null }
			type: string
		},
	]
	url: string
}
