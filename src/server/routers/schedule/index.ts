import { IProject } from 'features/core/schedule/schedule'
import { createPageInDb } from 'features/core'

import { returnRequest } from 'shared'

import { privateProcedure, router } from 'server/router'
import { TRPCError } from '@trpc/server'

export const scheduleRouter = router({
	test: privateProcedure.mutation(async ({ ctx: { notionClient, prisma, session }, input }) => {
		const { userId } = session

		const user = await prisma.user.findUnique({
			select: {
				notion: {
					select: { units: { where: { isEnable: true, title: 'Days' } } },
				},
			},
			where: { providerAccountId: userId },
		})

		if (!user) {
			throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' })
		}

		if (!user.notion?.units) {
			throw new TRPCError({ code: 'NOT_FOUND', message: 'Databases not found' })
		}

		user.notion.units.map(async ({ dataId }) => {
			const project: IProject = {
				hours: 1,
				minutes: 30,
				relation: 'test-relation',
				startDate: new Date().toISOString(),
				title: 'test-page',
			}

			await createPageInDb(notionClient, dataId, project)
		})

		return returnRequest(null, 'created test page')
	}),
})
