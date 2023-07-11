import { parseWakaJson, simplifyWakaJson } from 'shared/lib/parse-waka-json'

import { it } from 'vitest'

it('simplifyWakaJson', async () => {
	await simplifyWakaJson(__dirname.concat('/wakatime.json'), __dirname.concat('/simple-time.json'))
})

it('parseWakaJson', async () => {
	await parseWakaJson(__dirname.concat('/simple-time.json'), __dirname.concat('/result.json'))
})
