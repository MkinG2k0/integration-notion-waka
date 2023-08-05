import { Duration } from './index'

import { wait } from '../wait'
import { it } from 'vitest'

it('test duration', async () => {
	const duration = new Duration()
	await wait(1346)
	const endSecTime = duration.end() / 1000
	console.log(endSecTime)
})
