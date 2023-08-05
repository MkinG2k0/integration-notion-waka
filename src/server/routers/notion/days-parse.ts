import { createPageInDb } from 'features/core'

import { Duration } from 'shared/lib/duration'
import { wait } from 'shared'

import { privateProcedure, router } from 'server/router'
import { Client } from '@notionhq/client'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

const ZProject = z.object({
	date: z.string(),
	decimal: z.string(),
	digital: z.string(),
	hours: z.number(),
	minutes: z.number(),
	name: z.string(),
	percent: z.number(),
	text: z.string(),
	total_seconds: z.number(),
})

const ZDayProject = z.object({ date: z.string(), projects: z.array(ZProject) })

export const daysRouter = router({
	days: privateProcedure
		.input(z.array(ZProject))
		.mutation(async ({ ctx: { notionClient, prisma, session }, input }) => {
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

			const [unit] = user.notion.units
			const { dataId } = unit

			let indexStep = 0
			let indexChunk = 0
			const stepDelay = 3

			const duration = new Duration()
			const arr = input.map(async ({ date, hours, minutes, name }, index) => {
				indexStep += 1

				if (indexStep === stepDelay) {
					indexStep = 0
					indexChunk += 1
				}

				await wait(1100 * indexChunk)

				const data = await createPageInDb(
					notionClient,
					dataId,
					{
						endDate: date,
						hours,
						minutes,
						relation: name,
						startDate: date,
						title: name,
					},
					false,
				)

				console.log(date, name)
				return data
			})
			await Promise.all(arr)

			console.log(duration.end() / 1000, '------------end------------')

			// await executeAllDays(input, notionClient, dataId)
		}),
})

async function executeAllDays(days: any[], notionClient: Client, dbId: string) {
	async function executeDays(index: number) {
		if (index >= days.length) {
			return
		}

		await executeCurrDay(days[index])
		await executeDays(index + 1)
	}

	async function executeCurrDay({ date, projects }) {
		async function executeDay(index: number, isPrevError = false) {
			if (index >= projects.length) {
				return
			}

			const { hours, minutes, name } = projects[index]
			console.log(date, name)

			// await fetch
			const isError = await createPageInDb(
				notionClient,
				dbId,
				{
					endDate: date,
					hours,
					minutes,
					relation: name,
					startDate: date,
					title: name,
				},
				false,
			)
				.then(() => false)
				.catch(() => true)

			if (isError && !isPrevError) {
				await wait(2000)
				await executeDay(index, true)
			} else {
				await executeDay(index + 1)
			}
		}

		await executeDay(0)
	}

	await executeDays(0)
}
