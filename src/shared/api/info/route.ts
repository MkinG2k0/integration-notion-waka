import { WakaTimeClient } from 'shared/lib/waka/waka'
import { waka_key } from 'shared/config/key'

import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	const wakaTimeInstance = new WakaTimeClient(waka_key)
	const data = await wakaTimeInstance.getMe()

	return NextResponse.json(data)
}
