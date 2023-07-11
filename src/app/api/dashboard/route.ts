import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const GET = async () => {
	const store = await cookies()

	return NextResponse.json({}, { headers: { Cookie: store.toString() } })
}
