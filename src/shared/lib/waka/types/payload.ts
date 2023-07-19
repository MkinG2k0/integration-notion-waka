import { TRangeKey } from 'shared/lib/waka/config'

export declare namespace WakaTimePayload {
	interface UserId {
		userId?: 'current' | string
	}
	interface Projects extends UserId {
		page: number | string
		q?: string
	}

	interface Summary extends UserId {
		branchNames?: string[]
		dateRange: { endDate: string; startDate: string }
		projectName?: null | string
	}

	interface Stats extends UserId {
		projectName?: null | string
		range: TRangeKey

		timeout?: null | string
		useWritesOnly?: boolean | null
	}
}
