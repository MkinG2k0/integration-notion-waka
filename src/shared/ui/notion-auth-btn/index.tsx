import type { FC } from 'react'

import style from './style.module.scss'

interface NotionAuthBtnProps {}

export const NotionAuthBtn: FC<NotionAuthBtnProps> = () => {
	return (
		<a className={'text-white bg-gray-500 px-3 py-2 rounded no-underline'} href={redirectUri}>
			Auth Notion
		</a>
	)
}

const redirectUri = process.env.NEXT_OAUTH_REDIRECT_URI
