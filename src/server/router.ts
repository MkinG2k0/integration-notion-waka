import { clients, isAuthed } from 'server/middleware'
import { t } from 'server/trpc'

export const router = t.router
export const publicProcedure = t.procedure

export const privateProcedure = t.procedure.use(isAuthed).use(clients)
