import type { FC } from 'react'

import { REDIRECT_URI } from 'shared/config/env'

interface NotionAuthBtnProps {}

export const NotionAuthBtn: FC<NotionAuthBtnProps> = () => {
	return (
		<a className={'text-white bg-gray-500 px-3 py-2 rounded no-underline'} href={REDIRECT_URI}>
			Auth Notion
		</a>
	)
}
