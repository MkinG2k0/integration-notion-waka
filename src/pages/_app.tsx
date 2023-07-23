import { WithProviders } from 'core'
import Head from 'next/head'

function App({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<Head>
				<title>{'N>W'}</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default WithProviders(App)
