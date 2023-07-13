const DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000'
const IS_LOCAL = DOMAIN.includes('localhost')
const BASE_URL = `http${IS_LOCAL ? '' : 's'}://${DOMAIN}/`
const BASE_API = BASE_URL.concat('api/')

if (!IS_LOCAL) {
	const dayjs = require('dayjs')
	const timeInterval = Number(process.env.NEXT_INTERVAL || 300000)
	console.log(`start Interval by ${timeInterval / 1000}s`)

	const interval = setInterval(() => {
		fetch(BASE_API.concat('all'), { method: 'POST' })
			.then(() => {
				log('ok interval')
			})
			.catch(() => {
				log('error interval')
				clearInterval(interval)
			})
	}, timeInterval)

	const log = (text) => {
		const date = dayjs(new Date().toString()).format('DD/MM/YYYY hh:mm:ss')
		console.log(`${date}| ${text}`)
	}
}
