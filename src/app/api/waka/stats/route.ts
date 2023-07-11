import { WakaTimeClient } from 'shared/lib/waka/waka'
import { TRangeKey } from 'shared/lib/waka/config'
import { waka_key } from 'shared/config/key'

import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)
	const startDate = (searchParams.get('range') as TRangeKey) || 'LAST_7_DAYS'

	const wakaTimeInstance = new WakaTimeClient(waka_key)

	const data = await wakaTimeInstance.getStats({
		range: startDate,
	})

	data.data.dependencies = []

	return NextResponse.json(data)
}
