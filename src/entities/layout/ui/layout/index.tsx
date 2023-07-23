import { Header } from 'entities/layout/ui/header'

export const Layout: FC = ({ children }) => {
	return (
		<div className={'h-[100vh] col bg-background text-text'}>
			<Header />
			<div className={'col flex-auto scroll overflow-y-auto'}>
				<div className={'flex-auto p-4 mx-auto w-[clamp(10rem,100%,1000px)] pb-24'}>{children}</div>
				{/*<Footer />*/}
			</div>
		</div>
	)
}
