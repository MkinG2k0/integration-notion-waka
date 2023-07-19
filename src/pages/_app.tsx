import 'core/styles/index.scss'

import { Layout } from 'entities/layout'

import { trpc } from 'shared/lib/trpc'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ReactQueryDevtools initialIsOpen={false} />
		</SessionProvider>
	)
}

export default trpc.withTRPC(App)
