import 'core/styles/index.scss'

import { Layout } from 'entities/layout'

import Head from 'next/head'

export default function RootLayout({ children }: { children: React.ReactNode; session: any }) {
	return (
		<html>
			<Head>
				<meta content={'initial-scale=1, width=device-width'} name={'viewport'} />
			</Head>
			<body>
				<Layout>{children}</Layout>
				{/*{WithProviders(children)(children)}*/}
			</body>
		</html>
	)
}
