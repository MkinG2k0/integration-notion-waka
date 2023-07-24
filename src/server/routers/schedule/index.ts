import { privateProcedure, privateWakaProcedure, router } from 'server/router'
import { z } from 'zod'

export const scheduleRouter = router({
	start: privateWakaProcedure.input(z.string()).query(async ({ ctx: { wakaClient }, input }) => {}),
})
