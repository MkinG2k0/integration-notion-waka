import { userRouter } from './user'

import { scheduleRouter } from 'server/routers/schedule'
import { notionRouter } from 'server/routers/notion'
import { wakaRouter } from 'server/routers/waka'
import { router } from 'server/router'

export const appRouter = router({
	notion: notionRouter,
	schedule: scheduleRouter,
	user: userRouter,
	waka: wakaRouter,
})

export type AppRouter = typeof appRouter
