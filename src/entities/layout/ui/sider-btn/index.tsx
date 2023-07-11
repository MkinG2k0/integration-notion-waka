'use client'
import { FC } from 'react'

interface sideBtnProps {}

export const SiderBtn: FC<sideBtnProps> = ({}) => {
	const onCollapse = () => {}

	return (
		<div className={'bg-gray-800 flex items-center justify-center w-20 flex-grow-0 flex-shrink-0'}>
			{/*<Button className={'align-top text-white'} onClick={onCollapse}>*/}
			{/*	<MenuIcon />*/}
			{/*	/!* {sideCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*!/*/}
			{/*</Button>*/}
		</div>
	)
}
