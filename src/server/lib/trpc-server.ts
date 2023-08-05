import { BASE_API } from 'shared/config/env'

import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client'
import { AppRouter } from 'server/routers'
import superjson from 'superjson'

const trpcServer = createTRPCProxyClient<AppRouter>({
	links: [
		loggerLink({
			enabled: (opts) =>
				process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
		}),
		httpBatchLink({
			url: `${BASE_API}trpc`,
		}),
	],

	transformer: superjson,
})
