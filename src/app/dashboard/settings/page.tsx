'use client'

import { useEffect, useState } from 'react'

import { GetAuth, GetAuthData } from 'app/api/auth/route'

import { DbForm } from 'features/db-form/ui/db-form'

import { http } from 'shared/config/axios'

import { cookies } from 'next/headers'

const Page = () => {
	const [auth, setAuth] = useState<GetAuth | undefined>(undefined)

	useEffect(() => {
		const fetchAuth = async () => {
			const data = await http
				.get('/auth')
				.then<GetAuthData>((value) => value.data)
				.catch(({ response }) => response.data)
			setAuth(data)
		}
		fetchAuth()
	}, [])

	if (auth?.status === 200) {
		return <DbForm user={auth.data} />
	} else {
		return <div>Not auth</div>
	}
}

export default Page
