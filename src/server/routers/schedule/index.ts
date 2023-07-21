import { privateProcedure, router } from 'server/router'
import { z } from 'zod'

export const scheduleRouter = router({
	start: privateProcedure.input(z.string()).query(async ({ ctx: { wakaClient }, input }) => {}),
})
