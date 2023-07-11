import { formatDate, get2week } from 'shared/lib/date'
import { IStats } from 'shared/lib/waka/types/stats'
import { Datum } from 'shared/lib/waka/types'
import { http } from 'shared'

import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
	const { searchParams } = new URL(request.url)
	const id = searchParams.get('id')
	const endDate = searchParams.get('endDate') || formatDate(new Date())
	const startDate = searchParams.get('startDate') || formatDate(get2week(new Date(endDate)))

	if (!id) {
		return NextResponse.json({
			message: 'id not defined',
		})
	}
	// const wakaTimeInstance = new WakaTimeClient(waka_key)

	const { data } = await http.get<IReq<Datum[]>>('waka/summary', {
		params: { endDate, startDate },
	})

	const createdProjects = data.data.map(async ({ projects, range }) => {
		const { date } = range

		const arrProjects = projects.map(async ({ hours, minutes, name }) => {
			const { data } = await http.post<IStats>(
				'notion',
				{
					hours,
					minutes,
					startDate: date,
					title: name,
				},
				{ params: { id } }
			)

			return data
		})

		return await Promise.all(arrProjects)
	})

	const resultProjects = await Promise.all(createdProjects)

	return NextResponse.json({ message: 'created' })
}
