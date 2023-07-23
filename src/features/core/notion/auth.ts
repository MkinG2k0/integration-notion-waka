import { http } from 'shared'

export const notionAuth = async ({ clientId, clientSecret, code, redirect_uri }: INotionAuth) => {
	const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

	return await http
		.post<INotionPayload>(
			'https://api.notion.com/v1/oauth/token',
			{ code, grant_type: 'authorization_code', redirect_uri },
			{
				headers: {
					Accept: 'application/json',
					Authorization: `Basic ${encoded}`,
					'Content-Type': 'application/json',
				},
			},
		)
		.then(({ data }) => data)
}

export interface INotionAuth {
	clientId: string
	clientSecret: string
	code: string
	redirect_uri: string
}

export interface INotionPayload {
	access_token: string
	bot_id: string
	duplicated_template_id?: any
	owner: RootObjectOwner
	token_type: string
	workspace_icon: string
	workspace_id: string
	workspace_name: string
}

export interface RootObjectOwnerUser {
	avatar_url: string
	id: string
	name: string
	object: string
	person: string[]
	type: string
}

export interface RootObjectOwner {
	type: string
	user: RootObjectOwnerUser
}
