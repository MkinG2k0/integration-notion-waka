import { createInnerTRPCContext } from './context'

import { initTRPC } from '@trpc/server'
import superjson from 'superjson'

export const t = initTRPC.context<typeof createInnerTRPCContext>().create({
	transformer: superjson,
})
