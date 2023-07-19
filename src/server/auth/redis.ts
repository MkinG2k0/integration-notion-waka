import { Redis } from '@upstash/redis'

export const redis = new Redis({
	token: process.env.UPSTASH_REDIS_TOKEN || '',
	url: process.env.UPSTASH_REDIS_URL || '',
})
