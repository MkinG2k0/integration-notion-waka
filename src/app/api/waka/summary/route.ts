import { WakaTimeClient } from 'shared/lib/waka/waka'
import { formatDate } from 'shared/lib/date'
import { waka_key } from 'shared/config/key'

import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)
	const startDate = searchParams.get('startDate') || formatDate(new Date())
	const endDate = searchParams.get('endDate') || formatDate(new Date())
	const apiKey = searchParams.get('apiKey') || ''

	const wakaTimeInstance = new WakaTimeClient(apiKey)

	const { data } = await wakaTimeInstance.getSummary({ dateRange: { endDate, startDate } })

	const formatData = data.map((value) => {
		value.dependencies = []
		return value
	})

	return NextResponse.json({ data: formatData })
}
