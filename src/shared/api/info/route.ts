import { WakaTimeClient } from 'shared/lib/waka/waka'

import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	// TODO
	const wakaTimeInstance = new WakaTimeClient('waka_key')
	const data = await wakaTimeInstance.getMe()

	return NextResponse.json(data)
}
