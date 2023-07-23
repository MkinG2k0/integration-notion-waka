import { BASE_API } from 'shared/config/env'

import { httpBatchLink, httpLink, loggerLink } from '@trpc/client'
import { devtoolsLink } from 'trpc-client-devtools-link'
import { AppRouter } from 'server/routers/_app'
import { createTRPCNext } from '@trpc/next'
import superjson from 'superjson'

export const trpc = createTRPCNext<AppRouter>({
	config() {
		return {
			links: [
				// adds pretty logs to your console in development and logs errors in production
				loggerLink({
					enabled: (opts) =>
						process.env.NODE_ENV === 'development' ||
						(opts.direction === 'down' && opts.result instanceof Error),
				}),
				httpBatchLink({
					url: `${BASE_API}trpc`,
				}),
			],

			queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

			transformer: superjson,
		}
	},
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	ssr: false,
})
