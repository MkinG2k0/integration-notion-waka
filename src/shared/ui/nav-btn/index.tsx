'use client'
import { Button, ButtonProps } from 'antd'
import Link from 'next/link'

interface NavBtnProps extends ButtonProps {
	href: string
}

export const NavBtn: FC<PropsWithChildren<NavBtnProps>> = ({ children, href, ...props }) => {
	return (
		<Link href={href}>
			<Button {...props}>{children}</Button>
		</Link>
	)
}
