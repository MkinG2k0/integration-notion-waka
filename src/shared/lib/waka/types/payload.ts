import { TRangeKey } from 'shared/lib/waka/config'

export declare namespace WakaTimePayload {
	interface Projects {
		page: number | string
		userId?: string
	}

	interface Summary {
		branchNames?: string[]
		dateRange: { endDate: string; startDate: string }
		projectName?: null | string
		userId?: string
	}

	interface Stats {
		projectName?: null | string
		range: TRangeKey

		timeout?: null | string
		useWritesOnly?: boolean | null
		userId?: string
	}
}
