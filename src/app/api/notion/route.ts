import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'

const NOTION_KEY = process.env.NEXT_OAUTH_CLIENT_SECRET

export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)
	const id = searchParams.get('id')
	const cookieStore = cookies()
	const auth = cookieStore.get('notion-token')?.value

	if (!id) {
		return NextResponse.json({
			message: 'id not defined',
		})
	}

	if (!auth) {
		return NextResponse.json(
			{
				message: 'is not auth',
			},
			{ status: 401 }
		)
	}

	const notionClient = new Client({
		auth,
	})

	const data = await notionClient.databases
		.retrieve({
			database_id: id,
		})
		.then((data) => ({ data }))
		.catch(({ body }) => JSON.parse(body))

	return NextResponse.json(data)
}

export const DELETE = async (request: Request, response: Response) => {
	const { searchParams } = new URL(request.url)
	const id = searchParams.get('id')

	if (!id) {
		return NextResponse.json({
			message: 'id not defined',
		})
	}

	const notionClient = new Client({ auth: NOTION_KEY })

	const data = await notionClient.pages.update({
		archived: true,
		page_id: id,
	})

	return NextResponse.json({
		data,
	})
}

export const POST = async (request: Request, response: Response) => {
	const { searchParams } = new URL(request.url)
	const { hours, minutes, relation, startDate, title } = await request.json<{
		endDate?: string
		hours: number
		minutes: number
		relation: string
		startDate: string
		title: string
	}>()
	const cookieStore = cookies()
	const database_id = searchParams.get('id')
	const auth = cookieStore.get('notion-token')?.value || searchParams.get('auth') || ''

	if (!database_id) {
		return NextResponse.json({
			message: 'id not defined',
		})
	}

	const time = hours * 60 + minutes
	const notionClient = new Client({ auth })

	const formatDate = dayjs(startDate).format('DD/MM/YYYY')
	const customId = `${title}:${formatDate}`

	const searchDay = await notionClient.databases.query({
		auth,
		database_id,
		filter: { property: 'waka_id', rich_text: { equals: customId } },
	})
	const isFind = searchDay.results[0]

	if (isFind) {
		const data = await notionClient.pages.update({
			auth,
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

		return NextResponse.json({
			data,
			message: 'update',
		})
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

	return NextResponse.json({
		data,
		message: 'create',
	})
}
