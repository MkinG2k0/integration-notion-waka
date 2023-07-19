import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from 'server/prisma'

export interface ReqUserSave {
	calendarId?: string
	isSchedule?: boolean
	languageId?: string
	projectsId?: string
	time?: string
	wakaApiKey: string
}
export const POST = async (request: Request) => {
	const { searchParams } = new URL(request.url)
	const { calendarId, isSchedule, languageId, projectsId, wakaApiKey } =
		await request.json<ReqUserSave>()

	const cookieStore = cookies()
	const notionId = cookieStore.get('notion-id')?.value || ''

	if (!notionId) {
		return NextResponse.json({ message: 'auth needed' })
	}

	const user = await prisma.user.findUnique({
		select: { id: true, notion: true, waka: true },
		where: { notionId },
	})

	if (!user) {
		return NextResponse.json({ message: 'Cannot find user' })
	}
	const { id, notion, waka } = user
	await prisma.user.update({ data: { isSchedule }, where: { id } })

	if (waka) {
		await prisma.waka.update({
			data: { wakaApiKey },
			where: { userId: id },
		})
	} else {
		await prisma.waka.create({
			data: { user: { connect: { id } }, wakaApiKey },
		})
	}

	if (notion) {
		await prisma.notion.update({
			data: { calendarId, languageId, projectsId },
			where: { userId: id },
		})
	} else {
		await prisma.notion.create({
			data: {
				calendarId,
				languageId,
				projectsId,
				userId: id,
			},
		})
	}

	const newUser = await prisma.user.findUnique({
		select: { id: true, notion: true, waka: true },
		where: { notionId },
	})

	return NextResponse.json({ data: newUser, message: 'saved' })
}
