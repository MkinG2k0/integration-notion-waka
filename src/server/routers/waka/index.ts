import { isValidApiKey } from 'shared/lib/waka/is-valid-api-key'
import { ReturnRequest, trpc } from 'shared'

import { wakaProjectRouter } from 'server/routers/waka/waka-projects'
import { privateProcedure, router } from 'server/router'
import { z } from 'zod'

export const wakaRouter = router({
	project: wakaProjectRouter,
	setToken: privateProcedure
		.input(z.object({ apiKey: z.string() }))
		.mutation(async ({ ctx: { prisma, session, wakaClient }, input }) => {
			const { userId } = session
			const { apiKey } = input

			if (wakaClient) {
				const checkValidKey = isValidApiKey(apiKey)

				if (!checkValidKey) {
					return ReturnRequest(null, `invalid api "${apiKey}" key`, 'invalid_key')
				}

				const wakaUpdate = await prisma.waka.update({
					data: { wakaApiKey: apiKey },
					where: { userId },
				})

				return ReturnRequest(wakaUpdate, 'updated')
			}

			const wakaCreate = await prisma.waka.create({ data: { userId, wakaApiKey: apiKey } })

			return ReturnRequest(wakaCreate, 'created')
		}),
	stats: privateProcedure.input(z.string()).query(async ({ ctx: { wakaClient }, input }) => {
		// @ts-ignore TODO input range
		const { data } = await wakaClient.getStats({ range: input })
		data.dependencies = []
		return ReturnRequest(data, 'last 7 days stats')
	}),
	statusBar: privateProcedure.query(async ({ ctx: { wakaClient }, input }) => {
		const { data } = await wakaClient.getStatusBar()
		data.dependencies = []
		return ReturnRequest(data, 'last 7 days stats')
	}),
})
