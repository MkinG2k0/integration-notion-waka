export const DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000'
export const IS_LOCAL = DOMAIN.includes('localhost')
export const BASE_URL = `http${IS_LOCAL ? '' : 's'}://${DOMAIN}/`
export const BASE_API = BASE_URL.concat('api/')
export const CLIENT_ID = process.env.NEXT_OAUTH_CLIENT_ID
export const CLIENT_SECRET = process.env.NEXT_OAUTH_CLIENT_SECRET
export const REDIRECT_URI = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI
