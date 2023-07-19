import { createNextApiHandler } from '@trpc/server/adapters/next'
import { createTRPCContext } from 'server/context'
import { appRouter } from 'server/routers/_app'

export default createNextApiHandler({
	createContext: createTRPCContext,
	onError({ error }) {
		if (error.code === 'INTERNAL_SERVER_ERROR') {
			console.error('Something went wrong', error)
		}
	},
	router: appRouter,
})
