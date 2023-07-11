'use client'

import { NavBtn } from 'shared/ui/nav-btn'
import { http } from 'shared'

import { Button } from 'antd'
import Link from 'next/link'

const Page = () => {
	const onSyncDay = () => {
		http.post('schedule', {})
	}

	return (
		<div className={'col'}>
			<NavBtn href={'dashboard/settings'}>settings</NavBtn>
			<Button onClick={onSyncDay}>Sync day</Button>
		</div>
	)
}

export default Page
