export interface IStats {
	data: StatsData
}

export interface StatsData {
	best_day: BestDay
	categories: StatsCategory[]
	created_at: string
	daily_average: number
	daily_average_including_other_language: number
	days_including_holidays: number
	days_minus_holidays: number
	dependencies: StatsCategory[]
	editors: StatsCategory[]
	end: string
	holidays: number
	human_readable_daily_average: string
	human_readable_daily_average_including_other_language: string
	human_readable_range: string
	human_readable_total: string
	human_readable_total_including_other_language: string
	id: string
	is_already_updating: boolean
	is_coding_activity_visible: boolean
	is_including_today: boolean
	is_other_usage_visible: boolean
	is_stuck: boolean
	is_up_to_date: boolean
	is_up_to_date_pending_future: boolean
	languages: StatsCategory[]
	machines: StatsCategory[]
	modified_at: string
	operating_systems: StatsCategory[]
	percent_calculated: number
	projects: StatsCategory[]
	range: string
	start: string
	status: string
	timeout: number
	timezone: string
	total_seconds: number
	total_seconds_including_other_language: number
	user_id: string
	username: null
	writes_only: boolean
}

export interface BestDay {
	created_at: string
	date: string
	id: string
	modified_at: string
	text: string
	total_seconds: number
}

export interface StatsCategory {
	decimal: string
	digital: string
	hours: number
	machine_name_id?: string
	minutes: number
	name: string
	percent: number
	text: string
	total_seconds: number
}
