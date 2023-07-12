import { prisma } from 'shared/prisma'
import { http } from 'shared'

import { NextResponse } from 'next/server'

export const POST = async () => {
	const users = await prisma.user.findMany({ where: { isSchedule: true } })

	const data = await Promise.all(
		users.map(
			async ({ notionId, notionToken }) => await http.post('schedule', { notionId, notionToken })
		)
	)
	console.log('ok')
	return NextResponse.json({ message: 'ok' })
}
