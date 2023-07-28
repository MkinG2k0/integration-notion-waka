export interface IProjects {
	data: ProjectData[]
	next_page: number
	page: number
	prev_page: number
	total: number
	total_pages: number
}

export interface ProjectData {
	badge: null
	clients: any[]
	color: null
	created_at: string
	has_public_url: boolean
	human_readable_last_heartbeat_at: string
	id: string
	last_heartbeat_at: string
	name: string
	repository: null
	url: string
	urlencoded_name: string
}
