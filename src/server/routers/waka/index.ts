import { isValidApiKey } from 'shared/lib/waka/is-valid-api-key'
import { returnRequest } from 'shared'

import { privateProcedure, privateWakaProcedure, router } from 'server/router'
import { wakaProjectRouter } from 'server/routers/waka/waka-projects'
import { z } from 'zod'

const unionRange = z.union([
	z.literal('all_time'),
	z.literal('last_6_months'),
	z.literal('last_7_days'),
	z.literal('last_30_days'),
	z.literal('last_year'),
])

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
					return returnRequest(null, `invalid api "${apiKey}" key`, 'invalid_key')
				}

				const wakaUpdate = await prisma.user.update({
					data: { wakaTime: { update: { wakaApiKey: apiKey } } },
					where: { providerAccountId: userId },
				})
				return returnRequest(wakaUpdate, 'updated')
			}

			const wakaCreate = await prisma.wakaTime.create({ data: { userId, wakaApiKey: apiKey } })

			return returnRequest(wakaCreate, 'created')
		}),
	stats: privateWakaProcedure.input(unionRange).query(async ({ ctx: { wakaClient }, input }) => {
		const { data } = await wakaClient.getStats({ range: input })
		data.dependencies = []
		return returnRequest(data, 'last 7 days stats')
	}),
	statusBar: privateWakaProcedure.query(async ({ ctx }) => {
		const { wakaClient } = ctx

		const { data } = await wakaClient.getStatusBar()

		data.dependencies = []
		return returnRequest(data, 'stats now')
	}),
})
