import { schedule } from 'features/core/schedule/schedule'

import { verifySignature } from '@upstash/qstash/nextjs'

const handler = async (req, res) => {
	await schedule()
	res.status(200).end()
}

// export default verifySignature(handler)
export default handler

export const config = {
	api: {
		bodyParser: false,
	},
}
