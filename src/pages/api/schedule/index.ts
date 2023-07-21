import { schedule } from 'server/routers/schedule/utils'
import { verifySignature } from '@upstash/qstash/nextjs'

const handler = async (req, res) => {
	await schedule()
	res.status(200).end()
}

export default verifySignature(handler)
// export default handler

export const config = {
	api: {
		bodyParser: false,
	},
}
