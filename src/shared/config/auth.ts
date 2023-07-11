import CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'

export const auth: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				const user = { email: 'admin@admin.com', id: '1', name: 'Admin' }
				return user
			},
			credentials: {
				email: {
					label: 'Email',
					placeholder: 'example@example.com',
					type: 'email',
				},
				password: { label: 'Password', type: 'password' },
			},
			name: 'Sign in',
		}),
	],
	session: {
		strategy: 'jwt',
	},
}
