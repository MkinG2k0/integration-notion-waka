import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const GET = async () => {
	const store = await cookies()
	await store.set({
		name: 'name',
		path: '/', // For all paths
		value: 'asd',
	})

	console.log(await store.get('name')?.value)

	// await new Promise((resolve, reject) => setTimeout(resolve, 1000))
	return NextResponse.json({}, { headers: { Cookie: store.toString() } })
}
