import { ReturnRequest } from 'shared'

import { wakaProjectRouter } from 'server/routers/waka/waka-projects'
import { privateProcedure, router } from 'server/router'
import { NotionUnit } from 'prisma-types'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export type TDatabaseTitle = 'Days' | 'Projects' | 'Tasks'

export const notionRouter = router({
	getDatabaseId: privateProcedure.query(async ({ ctx: { prisma, session }, input }) => {
		const { userId } = session

		const user = await prisma.user.findUnique({
			select: { notion: { select: { data: { where: { type: 'database' } } } } },
			where: { providerAccountId: userId },
		})

		const dataBases = user?.notion?.data

		if (!dataBases) {
			throw new TRPCError({ code: 'NOT_FOUND', message: 'Not found database' })
		}

		const result = {} as Record<TDatabaseTitle, NotionUnit>

		dataBases.forEach((data) => {
			const { title } = data
			result[title] = data
		})

		return ReturnRequest(result, 'get')
	}),
	project: wakaProjectRouter,
	setDatabaseId: privateProcedure
		.input(
			z.object({
				Days: z.object({ data: z.string(), id: z.string() }),
				Projects: z.object({ data: z.string(), id: z.string() }),
			}),
		)
		.mutation(async ({ ctx: { prisma, session }, input }) => {
			const { Days, Projects } = input
			await prisma.notionUnit.update({ data: { dataId: Days.data }, where: { id: Days.id } })
			await prisma.notionUnit.update({
				data: { dataId: Projects.data },
				where: { id: Projects.id },
			})

			return ReturnRequest(null, 'updated')
		}),
})
