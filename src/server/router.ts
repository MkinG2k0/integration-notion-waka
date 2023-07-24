import { notionClient } from 'server/middleware/notion-client'
import { isAuthed, wakaClient } from 'server/middleware'
import { t } from 'server/trpc'

export const router = t.router
export const publicProcedure = t.procedure

export const privateProcedure = publicProcedure.use(isAuthed).use(notionClient)
export const privateWakaProcedure = privateProcedure.use(wakaClient)
