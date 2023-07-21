import 'core/styles/index.scss'

import { Layout } from 'entities/layout'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import { trpc } from 'server/lib'
import Head from 'next/head'

function App({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<Head>
				<title>{'N>W'}</title>
			</Head>
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<ReactQueryDevtools initialIsOpen={false} />
			</SessionProvider>
		</>
	)
}

export default trpc.withTRPC(App)
