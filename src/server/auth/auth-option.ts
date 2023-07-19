import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter'
import Notion from '@auth/core/providers/notion'
import { redis } from 'server/auth/redis'
import { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
	// @ts-ignore
	adapter: UpstashRedisAdapter(redis),
	callbacks: {
		async jwt({ account, profile, session, token, user }) {
			// console.log('------------------jwt')
			//
			// console.log(account, 'jwt-account', '\n')
			// console.log(session, 'jwt-session', '\n')
			// console.log(token, 'jwt-token', '\n')
			// console.log(user, 'jwt-user', '\n')
			// console.log(profile, 'jwt-profile', '\n')

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
			// console.log('------------------session')
			// newSession.user = user
			// console.log(session, 'session', '\n')
			// console.log(token, 'token', '\n')
			// console.log(user, 'user', '\n')
			return session
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
}
