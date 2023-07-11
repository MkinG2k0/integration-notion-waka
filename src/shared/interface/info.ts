export interface IInfo {
	data: Data
}

export interface Data {
	categories: Category[]
	dependencies: Category[]
	editors: Category[]
	grand_total: GrandTotal
	languages: Category[]
	machines: Category[]
	operating_systems: Category[]
	projects: Category[]
	range: Range
}

export interface Category {
	color?: null
	decimal: string
	digital: string
	hours: number
	machine_name_id?: string
	minutes: number
	name: string
	percent: number
	seconds: number
	text: string
	total_seconds: number
}

export interface GrandTotal {
	decimal: string
	digital: string
	hours: number
	minutes: number
	text: string
	total_seconds: number
}

export interface Range {
	date: string
	end: string
	start: string
	text: string
	timezone: string
}
