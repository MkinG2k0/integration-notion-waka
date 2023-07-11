export const DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000'
export const IS_LOCAL = DOMAIN.includes('localhost')
export const BASE_URL = `http${IS_LOCAL ? '' : 's'}://${DOMAIN}/`
export const BASE_API = BASE_URL.concat('api/')
export const CLIENT_ID = process.env.NEXT_OAUTH_CLIENT_ID
export const CLIENT_SECRET = process.env.NEXT_OAUTH_CLIENT_SECRET
export const REDIRECT_URI = process.env.NEXT_OAUTH_REDIRECT_URI

console.log(DOMAIN, 'DOMAIN')
console.log(IS_LOCAL, 'IS_LOCAL')
console.log(BASE_URL, 'BASE_URL')
console.log(BASE_API, 'BASE_API')
console.log(CLIENT_ID, 'CLIENT_ID')
console.log(CLIENT_SECRET, 'CLIENT_SECRET')
console.log(REDIRECT_URI, 'REDIRECT_URI')
