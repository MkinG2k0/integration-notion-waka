import { IAccount, userInit } from 'features/core'

import { BASE_API, BASE_URL } from 'shared/config/env'

import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter'
import Notion from '@auth/core/providers/notion'
import { redis } from 'server/auth/redis'
import { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
	// @ts-ignore
	adapter: UpstashRedisAdapter(redis),
	callbacks: {
		async jwt({ account, profile, session, token, user }) {
			if (account && token) {
				const { access_token, providerAccountId } = account
				const { email, name, picture } = token
				return { accessToken: access_token, email, name, picture, userId: providerAccountId }
			}

			return token
		},
		// redirect: ({ baseUrl, url }) => {
		// 	return BASE_URL.concat('settings')
		// },
		async session({ session, token, user }) {
			const newSession = session as any
			newSession.accessToken = token?.accessToken
			newSession.userId = token?.userId
			return session
		},
		async signIn({ account, credentials, email, profile, user }) {
			userInit(account as unknown as IAccount)

			return true
		},
	},
	providers: [
		// @ts-ignore
		Notion({
			clientId: process.env.NEXT_OAUTH_CLIENT_ID,
			clientSecret: process.env.NEXT_OAUTH_CLIENT_SECRET,
			redirectUri: BASE_API.concat('auth/callback/notion'),
		}),
	],

	session: { strategy: 'jwt' },
	theme: { colorScheme: 'auto' },
}
