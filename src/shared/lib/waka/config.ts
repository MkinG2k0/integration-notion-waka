export const rangeQueryParameters = {
	all_time: 'all_time',
	last_6_months: 'last_6_months',
	last_7_days: 'last_7_days',
	last_30_days: 'last_30_days',
	last_year: 'last_year',
} as const

export type TRangeKey = keyof typeof rangeQueryParameters
