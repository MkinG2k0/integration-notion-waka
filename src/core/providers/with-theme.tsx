import 'core/styles/index.scss'

import { ThemeProvider } from 'next-themes'

const themes = ['light', 'dark', 'system', 'green']

export const WithTheme = (component: FC) => (props) => {
	return (
		<ThemeProvider
			attribute={'class'}
			defaultTheme={'system'}
			enableSystem
			themes={themes}
			{...props}
		>
			{component(props)}
		</ThemeProvider>
	)
}
