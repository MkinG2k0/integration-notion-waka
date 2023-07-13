'use client'

import { useState } from 'react'

import { trpc } from './'

import { BASE_API } from 'shared/config/env'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getFetch, httpBatchLink, loggerLink } from '@trpc/client'
import superjson from 'superjson'

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: { queries: { staleTime: 5000 } },
			}),
	)

	const url = BASE_API.concat('trpc/')

	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				loggerLink({
					enabled: () => true,
				}),
				httpBatchLink({
					fetch: async (input, init?) => {
						const fetch = getFetch()
						return fetch(input, {
							...init,
							credentials: 'include',
						})
					},
					url,
				}),
			],
			transformer: superjson,
		}),
	)
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools />
			</QueryClientProvider>
		</trpc.Provider>
	)
}
