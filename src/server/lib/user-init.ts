import { Client } from '@notionhq/client'
import { prisma } from 'server/prisma'

export interface IAccount {
	access_token: string
	providerAccountId: string
	workspace_id: string
	workspace_name: string
}
export const UserInit = async (account: IAccount) => {
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

	const data = await notionClient.search({ auth: access_token })

	const dataBase = data.results
		.filter(({ object }) => object === 'database')
		.map((data) => {
			if (!('title' in data)) {
				return
			}

			const { id, title } = data

			const normTitle = title[0].plain_text
			return { id, title: normTitle }
		})
		.filter(Boolean)

	const newUser = await prisma.user.create({
		data: {
			name: workspace_name,
			notion: {
				create: {
					accessToken: access_token,
					blocks: {},
					databases: { create: dataBase },
					id: providerAccountId,
					pages: {},
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
		Day: [Object]
		Name: [Object]
		Status: [Object]
		projects: [Object]
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
