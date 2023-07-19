import { useEffect } from 'react'

import { trpc } from 'shared'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from 'antd'
const start = new Date()

start.setDate(start.getDate() - 15)
const end = new Date()

export default function Home() {
	const { data: session } = useSession()
	// const { data } = trpc.waka.allProjects.useQuery({
	// 	// end,
	// 	// start,
	// })
	const { data } = trpc.waka.statusBar.useQuery()

	// waka_be04278d-bd71-4e32-a011-0a98f4ccd940

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
