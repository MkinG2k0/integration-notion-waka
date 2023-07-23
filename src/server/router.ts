import { notionClient } from 'server/middleware/notion-client'
import { isAuthed, wakaClient } from 'server/middleware'
import { t } from 'server/trpc'

export const router = t.router
export const publicProcedure = t.procedure

export const privateProcedure = t.procedure.use(isAuthed).use(wakaClient).use(notionClient)
