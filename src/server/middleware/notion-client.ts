import { Client } from '@notionhq/client'
import { t } from '../trpc'

export const notionClient = t.middleware(async ({ ctx, next }) => {
	const { session } = ctx

	const { accessToken } = session

	const notionClient = new Client({
		auth: accessToken,
	})

	return next({ ctx: { ...ctx, notionClient } })
})
