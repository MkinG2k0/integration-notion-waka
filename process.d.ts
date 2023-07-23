declare namespace NodeJS {
	export interface ProcessEnv {
		DATABASE_URL: string
		NEXT_OAUTH_CLIENT_ID: string
		NEXT_OAUTH_CLIENT_SECRET: string
		NEXT_PUBLIC_OAUTH_REDIRECT_URI: string
		NEXT_PUBLIC_VERCEL_URL: string
	}
}
