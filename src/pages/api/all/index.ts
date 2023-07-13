import { prisma } from 'shared/prisma'
import { http } from 'shared'

import { verifySignature } from '@upstash/qstash/nextjs'

const handler = async (req, res) => {
	const users = await prisma.user.findMany({ where: { isSchedule: true } })

	const data = await Promise.all(
		users.map(
			async ({ notionId, notionToken }) => await http.post('schedule', { notionId, notionToken }),
		),
	)

	res.status(200).end()
}

export default verifySignature(handler)

export const config = {
	api: {
		bodyParser: false,
	},
}
