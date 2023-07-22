import { BASE_API, REDIRECT_URI } from 'shared/config/env'

import { Client } from '@notionhq/client'
import { it } from 'vitest'

const clientId = '3cb4746d-cc64-4c98-a6ee-02e6c3122c18'
const clientSecret = 'secret_j5PmPJ4eOjUJjOXvXMzmf8G7pM3urAQxmQtT4H5u5gH'
//  process.env.NEXT_OAUTH_CLIENT_SECRET
const redirectUri =
	'https://api.notion.com/v1/oauth/authorize?client_id=3cb4746d-cc64-4c98-a6ee-02e6c3122c18&response_type=code&owner=user&redirect_uri=http://localhost:3000/'

it('auth', async () => {})

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
