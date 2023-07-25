import { schedule } from 'features/core/schedule/schedule'

import { verifySignature } from '@upstash/qstash/nextjs'
import { NextApiResponse } from 'next'

const handler = async (req, res: NextApiResponse) => {
	const times = await schedule()
	res.status(200).json({ times })
}

// export default verifySignature(handler)
export default handler

export const config = {
	api: {
		bodyParser: false,
	},
}
