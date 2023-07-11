'use client'
import { useEffect } from 'react'

import { GetAuth } from 'app/api/auth/route'

import { http } from 'shared'

import { useRouter, useSearchParams } from 'next/navigation'

const Page = () => {
	const searchParams = useSearchParams()
	const code = searchParams.get('code')
	const router = useRouter()

	useEffect(() => {
		if (code) {
			http.post('auth', {}, { params: { code } }).then(() => {
				router.push('/dashboard')
			})
		}
	}, [code, router])

	return <div>Load</div>
}
export default Page
