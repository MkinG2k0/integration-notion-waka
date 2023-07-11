import { ResNotionAuth } from 'app/api/auth/type'

import { Api } from 'shared/interface/api'
import { prisma } from 'shared/prisma'

import { Notion, Waka } from '@prisma/client'
import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import { cookies } from 'next/headers'
import axios from 'axios'

const clientId = process.env.NEXT_OAUTH_CLIENT_ID
const clientSecret = process.env.NEXT_OAUTH_CLIENT_SECRET
const redirect_uri = process.env.NEXT_OAUTH_REDIRECT_URI

export const POST = async (request: Request) => {
	const { searchParams } = new URL(request.url)
	const code = searchParams.get('code')
	const cookieStore = cookies()

	const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

	const data = await axios
		.post(
			'https://api.notion.com/v1/oauth/token',
			{
				code,
				grant_type: 'authorization_code',
				redirect_uri: 'http://localhost:3000/auth',
			},
			{
				headers: {
					Accept: 'application/json',
					Authorization: `Basic ${encoded}`,
					'Content-Type': 'application/json',
				},
			}
		)
		.then<ResNotionAuth>(({ data }) => data)
		.catch((err) => err.response.data)

	if ('error' in data) {
		return NextResponse.json(data)
	}

	const date = new Date()
	date.setDate(date.getDate() + 30)

	const auth = data.access_token
	cookieStore.set('notion-token', auth, { expires: date, httpOnly: true, path: '/', secure: true })
	cookieStore.set('notion-id', data.owner.user.id, { path: '/' })

	const findUser = await prisma.user.findUnique({ where: { notionId: data.owner.user.id } })

	if (findUser) {
		return NextResponse.json({ data: findUser, message: 'user login' })
	} else {
		const user = await prisma.user.create({
			data: { name: data.workspace_name, notionId: data.owner.user.id, notionToken: auth },
		})

		const database = await initDatabase(auth, user.id)

		return NextResponse.json({ data: { database, user }, message: 'user register' })
	}
}

const initDatabase = async (auth: string, userId: number) => {
	const notionClient = new Client({
		auth,
	})
	// find database
	const dataSearch = await notionClient.search({ auth })
	const filterDataBase = dataSearch.results.filter(({ object }) => object === 'database')
	const dbName: Record<string, string> = {}

	filterDataBase.forEach((data) => {
		const { id, object } = data
		if (object === 'database') {
			const { title } = data as unknown as { title: [{ text: { content: string } }] }
			const titleDB = title[0].text.content
			dbName[titleDB] = id
		}
	})

	return prisma.notion.create({
		data: {
			calendarId: dbName.Days,
			projectsId: dbName.Projects,
			user: { connect: { id: userId } },
		},
	})
}

export type GetAuthData = { isSchedule: boolean; notion: Notion | null; waka: Waka | null } | null

export type GetAuth = Api<GetAuthData>

export const GET = async (): Promise<NextResponse<GetAuth>> => {
	const cookieStore = cookies()
	const notionId = cookieStore.get('notion-id')?.value
	// console.log(notionId)
	if (!notionId) {
		return NextResponse.json({ message: 'not auth', status: 401 }, { status: 401 })
	}

	const user = await prisma.user.findUnique({
		select: { isSchedule: true, notion: true, waka: true },
		where: { notionId },
	})

	return NextResponse.json({ data: user, status: 200 })
}
