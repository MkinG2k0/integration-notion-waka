import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import { trpc } from 'server/lib'

export const WithSession = (component: FC) => (props) => {
	return <SessionProvider session={props.session}>{component(props)}</SessionProvider>
}
