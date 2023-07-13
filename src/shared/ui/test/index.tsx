'use client'

import React from 'react'

import { trpc } from 'shared/lib'

export function ListUsers() {
	const { data: users, isFetching, isLoading } = trpc.getUsers.useQuery()
	const { data: helo } = trpc.hello.useQuery({ text: 'asdasd' })

	console.log(helo)

	if (isLoading || isFetching) {
		return <p>Loading...</p>
	}

	return (
		<div
			style={{
				display: 'grid',
				gap: 20,
				gridTemplateColumns: '1fr 1fr 1fr 1fr',
			}}
		>
			{users?.map((user) => (
				<div key={user.id} style={{ border: '1px solid #ccc', textAlign: 'center' }}>
					<img
						alt={user.name}
						src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
						style={{ height: 180, width: 180 }}
					/>
					<h3>{user.name}</h3>
				</div>
			))}
		</div>
	)
}
