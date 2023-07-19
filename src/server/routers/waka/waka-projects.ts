import { isValidApiKey } from 'shared/lib/waka/is-valid-api-key'
import { ReturnRequest, trpc } from 'shared'

import { privateProcedure, router } from 'server/router'
import { z } from 'zod'

export const wakaProjectRouter = router({
	all: privateProcedure
		.input(z.object({ end: z.date().optional(), start: z.date().optional() }))
		.query(async ({ ctx: { wakaClient }, input }) => {
			const { end, start } = input
			const startTime = start?.getTime() || 0
			const endTime = end?.getTime() || new Date().getTime()

			const projects = await wakaClient.getProjects({ page: 1 })

			if (!projects) {
				return ReturnRequest(null, 'projects not found', 'not_found')
			}

			const { total_pages } = projects

			const decrementPage = total_pages - 1

			const arrPages = new Array(decrementPage).fill(0).map(async (_, index) => {
				const page = index + 2
				const { data } = await wakaClient.getProjects({ page })
				return data
			})

			const dataProjects = await Promise.all(arrPages)

			dataProjects.unshift(projects.data)

			const flatProjects = dataProjects.flatMap((arr) => {
				return arr.filter((project) => {
					const { created_at } = project
					const date = new Date(created_at).getTime()
					return startTime <= date && date <= endTime
				})
			})

			return ReturnRequest(flatProjects, 'all projects')
		}),
	current: privateProcedure
		.input(z.object({ page: z.number().optional(), query: z.string().optional() }))
		.query(async ({ ctx: { wakaClient }, input }) => {
			const { page = 1, query } = input

			const data = await wakaClient.getProjects({ page, q: query })

			return ReturnRequest(data, `projects on ${page} page`)
		}),
})
