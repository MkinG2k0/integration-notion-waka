import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { trpc } from 'server/lib'

export const WithReactQueryDevtools = (component: FC) => (props) => {
	return (
		<>
			<ReactQueryDevtools initialIsOpen={false} />
			{component(props)}
		</>
	)
}
