export interface ResNotionAuth {
	access_token: string
	bot_id: string
	duplicated_template_id?: string
	owner: RootObjectOwner
	token_type: string
	workspace_icon: string
	workspace_id: string
	workspace_name: string
}
export interface RootObjectOwnerUser {
	id: string
	object: string
}
export interface RootObjectOwner {
	type: string
	user: RootObjectOwnerUser
}
