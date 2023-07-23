import { WithReactQueryDevtools } from 'core/providers/with-react-query-devtools'
import { WithSession } from 'core/providers/with-session'
import { WithLayout } from 'core/providers/with-layout'
import { WithTheme } from 'core/providers/with-theme'
import compose from 'compose-function'
import { trpc } from 'server/lib'

export const WithProviders = compose(
	trpc.withTRPC,
	WithSession,
	WithReactQueryDevtools,
	WithTheme,
	WithLayout,
)
