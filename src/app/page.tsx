import { prisma } from 'shared/prisma'
import { NotionAuthBtn } from 'shared'

import { NextPage } from 'next'

const Page = async () => {
	return (
		<div className={'col justify-center align-middle  '}>
			<div className={'flex justify-center p-2'}>
				<NotionAuthBtn />
			</div>
		</div>
	)
}

export default Page
