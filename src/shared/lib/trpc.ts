import { httpBatchLink, loggerLink } from '@trpc/client'
import { AppRouter } from 'server/routers/_app'
import { createTRPCNext } from '@trpc/next'
import superjson from 'superjson'

function getBaseUrl() {
	if (typeof window !== 'undefined') {
		return ''
	}
	// reference for vercel.com
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`
	}

	// // reference for render.com
	if (process.env.RENDER_INTERNAL_HOSTNAME) {
		return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
	}

	// assume localhost
	return `http://localhost:${process.env.PORT ?? 3000}`
}

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
					url: `${getBaseUrl()}/api/trpc`,
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
