import { FetchCreateContextFnOptions, fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from 'server/routers/_app'

const handler = (request: Request) => {
	return fetchRequestHandler({
		createContext: function (opts: FetchCreateContextFnOptions): Promise<object> | object {
			return {}
		},
		endpoint: '/api/trpc',
		req: request,
		router: appRouter,
	})
}

export { handler as GET, handler as POST }
