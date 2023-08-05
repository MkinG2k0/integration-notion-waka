import { NextApiHandler } from 'next'

const Handle: NextApiHandler = async (req, res) => {
	const { body } = req
	console.log(body)
	res.json({ done: 'ok' })
}

export default Handle
