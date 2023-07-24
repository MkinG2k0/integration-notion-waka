import { Skeleton } from 'shared/ui/skeleton'

import { SettingsForm } from 'flat-pages/settings/ui/form'
import { trpc } from 'server/lib'

export const Settings = () => {
	const { isLoading } = trpc.notion.getDatabaseId.useQuery()

	if (isLoading) {
		return (
			<div className={'col gap-6'}>
				<div className={'col gap-3'}>
					<Skeleton className={'w-[10rem] h-5'} />
					<Skeleton className={'w-full h-10'} />
				</div>
				<div className={'col gap-3'}>
					<Skeleton className={'w-[14rem] h-5'} />
					<Skeleton className={'w-full h-10'} />
				</div>
				<div className={'col gap-3'}>
					<Skeleton className={'w-[14rem] h-5'} />
					<Skeleton className={'w-full h-10'} />
				</div>
				<Skeleton className={'w-[8rem] h-10'} />
			</div>
		)
	}

	return (
		<div className={'col'}>
			<SettingsForm />
		</div>
	)
}
