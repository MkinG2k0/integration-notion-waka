import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import { cookies } from 'next/headers'
export interface ResDatabase {
	data: IDatabase[]
}

export interface IDatabase {
	id: string
	object: string
	title: []
}

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

	const data = await notionClient.search({ auth })
	const dataBase = data.results.filter(({ object }) => object === 'database')

	return NextResponse.json({ data: dataBase })
}
