import { WakaTimeClient } from 'shared/lib/waka/waka'

import { TRPCError } from '@trpc/server'
import { prisma } from 'server/prisma'
import { t } from '../trpc'

export const wakaClient = t.middleware(async ({ ctx, next, path }) => {
	const { req, session } = ctx

	const { userId } = session
	const wakaFind = await prisma.user.findUnique({
		select: { wakaTime: { select: { wakaApiKey: true } } },
		where: { providerAccountId: userId },
	})

	if (!wakaFind) {
		throw new TRPCError({ code: 'NOT_FOUND', message: 'not found waka token' })
	}

	const isPathSetWakaToken = path === 'waka.setToken'

	const wakaKey = isPathSetWakaToken
		? req.body['0'].json.apiKey
		: wakaFind.wakaTime?.wakaApiKey || ''

	const wakaClient = new WakaTimeClient(wakaKey)

	// const userWaka = await wakaClient
	// 	.getUser()
	// 	.then(() => true)
	// 	.catch(() => false)
	//
	// if (!userWaka) {
	// 	throw new TRPCError({ code: 'BAD_REQUEST', message: 'waka token not valid' })
	// }

	return next({ ctx: { ...ctx, wakaClient } })
})
