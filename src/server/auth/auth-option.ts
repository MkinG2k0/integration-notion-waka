// import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter'
import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter'
import { IAccount, UserInit } from 'server/lib/user-init'
import { PrismaAdapter } from '@auth/prisma-adapter'
import Notion from '@auth/core/providers/notion'
import { redis } from 'server/auth/redis'
// import { redis } from 'server/auth/redis'
import { AuthOptions } from 'next-auth'
import { prisma } from 'server/prisma'

export const authOptions: AuthOptions = {
	// @ts-ignore
	adapter: UpstashRedisAdapter(redis),
	// adapter: PrismaAdapter(prisma),
	callbacks: {
		async jwt({ account, profile, session, token, user }) {
			if (account && token) {
				const { access_token, providerAccountId } = account
				const { email, name, picture } = token
				return { accessToken: access_token, email, name, picture, userId: providerAccountId }
			}
			return token
		},
		async session({ session, token, user }) {
			const newSession = session as any
			newSession.accessToken = token?.accessToken
			newSession.userId = token?.userId

			return session
		},
		async signIn({ account, credentials, email, profile, user }) {
			await UserInit(account as unknown as IAccount)

			return true
		},
	},
	providers: [
		// @ts-ignore
		Notion({
			clientId: process.env.NEXT_OAUTH_CLIENT_ID,
			clientSecret: process.env.NEXT_OAUTH_CLIENT_SECRET,
			redirectUri: 'http://localhost:3000/api/auth/callback/notion',
		}),
	],
	session: { strategy: 'jwt' },
	theme: { colorScheme: 'auto' },
}