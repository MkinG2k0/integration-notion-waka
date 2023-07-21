import { Client } from '@notionhq/client'
import { it } from 'vitest'

const clientId = '96ae1b01-9f4a-4d55-98c5-642eda938a9a'
const clientSecret = 'secret_n3T7baqeXsph4qQcZkX1WT3Cj19iUKsYtACZfoXJnP'
const redirect =
	'https://api.notion.com/v1/oauth/authorize?client_id=96ae1b01-9f4a-4d55-98c5-642eda938a9a&response_type=code&owner=user&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth'

it('auth', async () => {
	// encode in base 64
	const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

	const response = await fetch('https://api.notion.com/v1/oauth/token', {
		body: JSON.stringify({
			code: clientId,
			grant_type: 'authorization_code',
			redirect_uri: redirect,
		}),
		headers: {
			Accept: 'application/json',
			Authorization: `Basic ${encoded}`,
			'Content-Type': 'application/json',
		},
		method: 'POST',
	}).then((data) => data.json())
})

it('auth client', async () => {
	const notionClient = new Client({
		auth: clientSecret,
	})

	const data = await notionClient.databases
		.retrieve({
			database_id: '6aa3fb87819442bc871fe6097164ea22',
		})
		.then((data) => ({ data }))
		.catch((error) => {
			return {
				error,
				message: 'Error',
			}
		})
})
