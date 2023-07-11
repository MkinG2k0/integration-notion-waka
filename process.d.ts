declare namespace NodeJS {
	export interface ProcessEnv {
		AUTH0_ID: string
		AUTH0_SECRET: string
		DATABASE_URL: string
		NEXT_OAUTH_CLIENT_ID: string
		NEXT_OAUTH_CLIENT_SECRET: string
		NEXT_PUBLIC_URL: string
		// custom
		NEXT_PUBLIC_URL_ENDPOINT: string
		NEXTAUTH_SECRET: string
		// auth
		NEXTAUTH_URL: string
		TWITTER_ID: string
		TWITTER_SECRET: string
	}
}
