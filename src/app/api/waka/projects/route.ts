import { WakaTimeClient } from 'shared/lib/waka/waka'

import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)
	const page = searchParams.get('page') || 1
	const all = searchParams.get('all') === 'true'

	// TODO key
	const wakaTimeInstance = new WakaTimeClient('waka_key')

	const data = await wakaTimeInstance.getProjects({ page })

	if (all) {
		const { total_pages } = data
		const decrementPage = total_pages - 1

		const arrPages = new Array(decrementPage).fill(0).map(async (_, index) => {
			const page = index + 2
			const { data } = await wakaTimeInstance.getProjects({ page })
			return data
		})

		const dataProjects = await Promise.all(arrPages)

		dataProjects.unshift(data.data)

		const flatProjects = dataProjects.flatMap((value) => value)

		return NextResponse.json({ data: flatProjects })
	} else {
		return NextResponse.json({ data })
	}
}
