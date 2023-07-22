import { WakaTimeClient } from 'shared/lib/waka/waka'

import { Client } from '@notionhq/client'
import { TRPCError } from '@trpc/server'
import { prisma } from 'server/prisma'
import { t } from '../trpc'

export const clients = t.middleware(async ({ ctx, next, path }) => {
	const { req, session } = ctx

	const { accessToken, userId } = session

	const notionClient = new Client({
		auth: accessToken,
	})
	//
	// const wakaFind = await prisma.notion.findUnique({
	// 	select: { User: { select: { wakaTime: { select: { wakaApiKey: true } } } } },
	// 	where: { id: userId },
	// })
	//
	// if (!wakaFind) {
	// 	throw new TRPCError({ code: 'NOT_FOUND', message: 'not found waka token' })
	// }
	//
	// let wakaKey = wakaFind.User.wakaTime
	//
	// if (path === 'waka.setToken') {
	// 	wakaKey = req.body['0'].json.apiKey
	// }
	//
	// const wakaClient = new WakaTimeClient(wakaKey)

	// const userWaka = await wakaClient
	// 	.getUser()
	// 	.then(() => true)
	// 	.catch(() => false)
	//
	// if (!userWaka) {
	// 	throw new TRPCError({ code: 'BAD_REQUEST', message: 'waka token not valid' })
	// }

	const clients = {
		notionClient,
		wakaClient: {},
	}

	return next({ ctx: { ...ctx, ...clients } })
})
