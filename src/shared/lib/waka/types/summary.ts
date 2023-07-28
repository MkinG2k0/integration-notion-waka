export interface ISummary {
	cumulative_total: CumulativeTotal
	daily_average: DailyAverage
	data: SummaryData[]
	end: string
	start: string
}

export interface CumulativeTotal {
	decimal: string
	digital: string
	seconds: number
	text: string
}

export interface DailyAverage {
	days_including_holidays: number
	days_minus_holidays: number
	holidays: number
	seconds: number
	seconds_including_other_language: number
	text: string
	text_including_other_language: string
}

export interface SummaryData {
	categories: SummaryCategory[]
	dependencies: SummaryCategory[]
	editors: SummaryCategory[]
	grand_total: GrandTotal
	languages: SummaryCategory[]
	machines: SummaryCategory[]
	operating_systems: SummaryCategory[]
	projects: SummaryCategory[]
	range: Range
}

export interface SummaryCategory {
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
