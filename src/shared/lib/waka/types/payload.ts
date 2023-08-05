import { TRangeKey } from 'shared/lib/waka/config'

export declare namespace WakaTimePayload {
	type TUserId = 'current' | string

	interface UserId {
		userId?: TUserId
	}

	interface OrgDashMemDuration extends UserId {
		dashboardId: string
		memberId: string
		organizationId: string
	}

	interface OrgDashboards extends UserId {
		organizationId: string
	}

	interface TeamMemberSummary extends UserId, Summary {
		teamId: string
		teamMemberId: string
	}

	interface OrgDashMemSummaries extends OrgDashMemDuration {}

	interface OrgDashMembers extends UserId {
		dashboardId: string
		organizationId: string
	}

	interface TeamMembers extends UserId {
		teamId: string
	}

	interface OrgDashMemSum extends UserId {
		dashboardId: string
		memberId: string
		organizationId: string
	}

	interface Projects extends UserId {
		page: number | string
		q?: string
	}

	interface Summary extends UserId {
		branches?: string[]
		end: string
		project?: string
		start: string
	}

	interface Stats extends UserId {
		project?: string
		projectName?: null | string

		range: TRangeKey
		timeout?: null | string

		useWritesOnly?: boolean | null
		writes_only?: null | string
	}

	interface Commits extends UserId {
		author: string
		page: number | string
		projectName: string
	}

	interface Durations extends UserId {
		branches: string[]
		date: string
		project: string
	}

	interface Leader {
		language?: null | string
		pageNumber?: null | string
	}

	interface Heartbeats extends UserId {
		date: string
	}
}
