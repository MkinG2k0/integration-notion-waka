import { prisma } from 'shared/prisma'
import { http } from 'shared'

import { verifySignature } from '@upstash/qstash/nextjs'
import { NextResponse } from 'next/server'

const POST = async () => {
	const users = await prisma.user.findMany({ where: { isSchedule: true } })

	const data = await Promise.all(
		users.map(
			async ({ notionId, notionToken }) => await http.post('schedule', { notionId, notionToken }),
		),
	)

	return NextResponse.json({ message: 'ok' })
}

const verify = verifySignature(POST)

export { verify as POST, verify as GET }

export const config = {
	api: {
		bodyParser: false,
	},
}
