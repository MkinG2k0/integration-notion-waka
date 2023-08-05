import { returnRequest } from 'shared'

import { wakaProjectRouter } from 'server/routers/waka/waka-projects'
import { daysRouter } from 'server/routers/notion/days-parse'
import { privateProcedure, router } from 'server/router'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export type TDatabaseTitle = 'Days' | 'Projects' | 'Tasks' | 'WakaTimeApiKey'
export type TDatabase = Record<TDatabaseTitle, { dataId: string; id: string; title: string }>

export const notionRouter = router({
	getDatabaseId: privateProcedure.query(async ({ ctx: { prisma, session }, input }) => {
		const { userId } = session

		const user = await prisma.user.findUnique({
			select: {
				notion: { select: { units: { where: { type: 'database' } } } },
				wakaTime: { select: { id: true, wakaApiKey: true } },
			},
			where: { providerAccountId: userId },
		})

		if (!user) {
			throw new TRPCError({ code: 'NOT_FOUND', message: 'Not found user' })
		}
		const { notion, wakaTime } = user

		if (!notion) {
			throw new TRPCError({ code: 'NOT_FOUND', message: 'Not found notion' })
		}

		if (!wakaTime) {
			throw new TRPCError({ code: 'NOT_FOUND', message: 'Not found wakaTime' })
		}

		const dataBases = notion.units

		const WakaTimeApiKey = { dataId: wakaTime.wakaApiKey, id: wakaTime.id, title: 'WakaTimeApiKey' }

		const result = { WakaTimeApiKey } as TDatabase

		dataBases.forEach((data) => {
			const { dataId, id, title } = data
			result[title] = { dataId, id, title }
		})

		return returnRequest(result, 'get')
	}),
	parse: daysRouter,
	project: wakaProjectRouter,
	setDatabaseId: privateProcedure
		.input(
			z.object({
				Days: z.object({ data: z.string(), id: z.string() }),
				Projects: z.object({ data: z.string(), id: z.string() }),
				WakaTimeApiKey: z.object({ data: z.string(), id: z.string() }),
			}),
		)
		.mutation(async ({ ctx: { prisma, session }, input }) => {
			const { Days, Projects, WakaTimeApiKey } = input
			const daysUnit = prisma.notionUnit.update({
				data: { dataId: Days.data },
				where: { id: Days.id },
			})
			const ProjectsUnit = prisma.notionUnit.update({
				data: { dataId: Projects.data },
				where: { id: Projects.id },
			})

			const wakaTime = prisma.wakaTime.update({
				data: { wakaApiKey: WakaTimeApiKey.data },
				where: { id: WakaTimeApiKey.id },
			})

			await Promise.all([daysUnit, ProjectsUnit, wakaTime])

			return returnRequest(null, 'updated')
		}),
})
