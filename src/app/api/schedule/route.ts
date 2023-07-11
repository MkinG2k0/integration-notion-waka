import { ReqUserSave } from 'app/api/user/route'

import { ISummary } from 'shared/lib/waka/types'
import { prisma } from 'shared/prisma'
import { http } from 'shared'

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const POST = async (request: Request, response: Response) => {
	const cookieStore = cookies()

	const req = await request.json<{
		notionId?: string
		notionToken?: string
	}>()

	const notionId = cookieStore.get('notion-id')?.value || req?.notionId || ''
	const auth = cookieStore.get('notion-token')?.value || req?.notionToken || ''

	const user = await prisma.user.findUnique({
		select: { id: true, notion: true, waka: true },
		where: { notionId },
	})

	if (!user) {
		return NextResponse.json({ message: 'not found user' })
	}
	const { notion, waka } = user
	const { wakaApiKey } = waka!
	const { calendarId, projectsId } = notion!

	const { data: summary } = await http.get<ISummary>('waka/summary', {
		params: { apiKey: wakaApiKey },
	})

	const data = summary.data.map(async ({ projects }) => {
		const data = await Promise.all(
			projects.map(async ({ hours, minutes, name }) => {
				return (
					await http.post(
						'notion',
						{
							hours,
							minutes,
							startDate: new Date().toISOString(),
							title: name,
						},
						{ params: { auth, id: calendarId } }
					)
				).data
			})
		)
		return data
	})

	return NextResponse.json({ data: await Promise.all(data) })
}
