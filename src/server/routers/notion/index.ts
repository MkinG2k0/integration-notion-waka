import { ReturnRequest } from 'shared'

import { wakaProjectRouter } from 'server/routers/waka/waka-projects'
import { privateProcedure, router } from 'server/router'
import { z } from 'zod'

export const notionRouter = router({
	project: wakaProjectRouter,
	setToken: privateProcedure
		.input(z.object({ apiKey: z.string() }))
		.mutation(async ({ ctx: { prisma, session, wakaClient }, input }) => {
			return ReturnRequest({}, 'created')
		}),
})
