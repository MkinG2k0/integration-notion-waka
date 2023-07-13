import 'core/styles/index.scss'

import { Layout } from 'entities/layout'

import { TrpcProvider } from 'shared/lib/trpc/trpc-provider'
import { trpc } from 'shared'

import Head from 'next/head'

function RootLayout({ children }: { children: React.ReactNode; session: any }) {
	return (
		<html>
			<Head>
				<meta content={'initial-scale=1, width=device-width'} name={'viewport'} />
			</Head>
			<body>
				<TrpcProvider>
					<Layout>{children}</Layout>
				</TrpcProvider>
			</body>
		</html>
	)
}

export default RootLayout
