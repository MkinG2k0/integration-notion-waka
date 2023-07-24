import { isValidApiKey } from 'shared/lib/waka/is-valid-api-key'
import { ReturnRequest } from 'shared'

import { privateProcedure, privateWakaProcedure, router } from 'server/router'
import { wakaProjectRouter } from 'server/routers/waka/waka-projects'
import { z } from 'zod'

export const wakaRouter = router({
	project: wakaProjectRouter,
	setToken: privateWakaProcedure
		.input(z.object({ apiKey: z.string() }))
		.mutation(async ({ ctx: { prisma, session, wakaClient }, input }) => {
			const { userId } = session
			const { apiKey } = input

			if (wakaClient) {
				const checkValidKey = isValidApiKey(apiKey)

				if (!checkValidKey) {
					return ReturnRequest(null, `invalid api "${apiKey}" key`, 'invalid_key')
				}

				const wakaUpdate = await prisma.user.update({
					data: { wakaTime: { update: { wakaApiKey: apiKey } } },
					where: { providerAccountId: userId },
				})
				return ReturnRequest(wakaUpdate, 'updated')
			}

			const wakaCreate = await prisma.wakaTime.create({ data: { userId, wakaApiKey: apiKey } })

			return ReturnRequest(wakaCreate, 'created')
		}),
	stats: privateWakaProcedure.input(z.string()).query(async ({ ctx: { wakaClient }, input }) => {
		// @ts-ignore TODO input range
		const { data } = await wakaClient.getStats({ range: input })
		data.dependencies = []
		return ReturnRequest(data, 'last 7 days stats')
	}),
	statusBar: privateWakaProcedure.query(async ({ ctx }) => {
		const { wakaClient } = ctx

		const { data } = await wakaClient.getStatusBar()

		data.dependencies = []
		return ReturnRequest(data, 'stats now')
	}),
})
