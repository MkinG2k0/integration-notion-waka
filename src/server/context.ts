import type { CreateNextContextOptions } from '@trpc/server/adapters/next'

import { prisma } from './prisma'

import { authOptions } from 'server/auth/auth-option'
import { getServerSession } from 'next-auth/next'

interface AuthSession {
	accessToken: string
	expires: string
	user: {
		email: string
		image: string
		name: string
	}
	userId: string
}

export async function createInnerTRPCContext(opts: CreateNextContextOptions) {
	const { req, res } = opts

	const session = (await getServerSession(req, res, authOptions)) as AuthSession

	return {
		prisma,
		session,
		...opts,
	}
}

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
	const { req, res } = opts

	const innerContext = await createInnerTRPCContext({
		req,
		res,
	})

	return {
		...innerContext,
		req,
	}
}
