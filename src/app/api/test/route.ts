import { NextResponse } from 'next/server'
import { redis } from 'server/auth/redis'

export const GET = async () => {
	const data = await redis.get('user:account:notion:*')

	return NextResponse.json({ data })
}
