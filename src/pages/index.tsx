import { useEffect } from 'react'

import { signIn, signOut, useSession } from 'next-auth/react'
import { trpc } from 'server/lib'
import { Button } from 'antd'
const start = new Date()

start.setDate(start.getDate() - 15)
const end = new Date()

export default function Home() {
	const { data: session } = useSession()
	const { mutate } = trpc.waka.setToken.useMutation()

	useEffect(() => {
		// fetch('http://localhost:3000/api/test')
		// mutate({ apiKey: 'waka_7c6dd81f-20bf-4efd-b47a-7bec725b535f' })
	}, [])

	if (session) {
		return (
			<>
				Signed in as {session?.user?.email} <br />
				<Button onClick={() => signOut()}>Sign out</Button>
				{/*{data?.message}*/}
			</>
		)
	}

	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}
