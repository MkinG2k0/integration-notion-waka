import { WakaTimePayload } from 'shared/lib/waka/types/payload'

export const translateSummaryParameters = ({
	branchNames = [],
	dateRange,
	projectName = null,
}: Omit<WakaTimePayload.Summary, 'userId'>) => {
	const { endDate, startDate } = dateRange
	return {
		branches: branchNames.join(','),
		end: endDate,
		project: projectName,
		start: startDate,
	}
}

export const translateStatsParameters = ({
	projectName = null,
	timeout = null,
	useWritesOnly = null,
}: Omit<WakaTimePayload.Stats, 'range' | 'userId'>) => ({
	project: projectName,
	timeout,
	writes_only: useWritesOnly,
})

export interface TranslateDurationParametersProps {
	branchNames?: string[]
	date: { endDate: string; startDate: string }
	projectName?: null | string
}
// Omit<WakaTimePayload.Stats, 'userId'>
export const translateDurationParameters = ({
	branchNames = [],
	date,
	projectName = null,
}: any) => ({
	branches: branchNames.join(','),
	date,
	project: projectName,
})

export interface TranslateCommitsParametersProps {
	authorUsername?: null | string
	pageNumber?: null | number | string
}

export const translateCommitsParameters = ({
	authorUsername = null,
	pageNumber = null,
}: TranslateCommitsParametersProps) => ({
	author: authorUsername,
	page: pageNumber,
})
