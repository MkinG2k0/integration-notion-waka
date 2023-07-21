export interface IStatusBar {
	cached_at: string
	data: RootObjectData
	has_team_features: boolean
}
export interface RootObjectDataCategories {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	seconds: number
	text: string
	total_seconds: number
}
export interface RootObjectDataDependencies {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	seconds: number
	text: string
	total_seconds: number
}
export interface RootObjectDataEditors {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	seconds: number
	text: string
	total_seconds: number
}
export interface RootObjectDataGrand_total {
	decimal: string
	digital: string
	hours: number
	minutes: number
	text: string
	total_seconds: number
}
export interface RootObjectDataLanguages {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	seconds: number
	text: string
	total_seconds: number
}
export interface RootObjectDataMachines {
	decimal: string
	digital: string
	hours: number
	machine_name_id: string
	minutes: number
	name: string
	percent: number
	seconds: number
	text: string
	total_seconds: number
}
export interface RootObjectDataOperating_systems {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	seconds: number
	text: string
	total_seconds: number
}
export interface RootObjectDataProjects {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	seconds: number
	text: string
	total_seconds: number
}
export interface RootObjectDataRange {
	date: string
	end: string
	start: string
	text: string
	timezone: string
}
export interface RootObjectData {
	categories: RootObjectDataCategories[]
	dependencies: RootObjectDataDependencies[]
	editors: RootObjectDataEditors[]
	grand_total: RootObjectDataGrand_total
	languages: RootObjectDataLanguages[]
	machines: RootObjectDataMachines[]
	operating_systems: RootObjectDataOperating_systems[]
	projects: RootObjectDataProjects[]
	range: RootObjectDataRange
}
