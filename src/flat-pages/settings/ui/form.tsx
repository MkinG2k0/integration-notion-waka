import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'shared/ui/form'
import { toast } from 'shared/ui/use-toast'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

import { formSchema } from 'flat-pages/settings/config/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { trpc } from 'server/lib'
import { z } from 'zod'

interface SettingsFormProps {}

export const SettingsForm: FC<SettingsFormProps> = () => {
	const { data } = trpc.notion.getDatabaseId.useQuery()
	const { mutate } = trpc.notion.setDatabaseId.useMutation()
	const { data: testData, isError, isSuccess, mutate: runTest } = trpc.schedule.test.useMutation()
	const databases = data?.data!

	useEffect(() => {
		if (isSuccess) {
			toast({
				className: 'border-green-500',
				title: 'Tested',
			})
		}
	}, [isSuccess])

	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			Days: databases.Days.dataId,
			Projects: databases.Projects.dataId,
			WakaTimeApiKey: databases.WakaTimeApiKey.dataId,
		},
		resolver: zodResolver(formSchema),
	})

	function onSubmit(data: z.infer<typeof formSchema>) {
		const newData = {
			Days: { data: data.Days, id: databases.Days.id },
			Projects: { data: data.Projects, id: databases.Projects.id },
			WakaTimeApiKey: { data: data.WakaTimeApiKey, id: databases.WakaTimeApiKey.id },
		}
		mutate(newData)
		toast({
			className: 'border-green-500',
			title: 'Saved',
		})
	}

	const onTest = () => {
		runTest()
	}

	return (
		<Form {...form}>
			<form className={'space-y-6'} onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{' WakaTime '}
								<a
									className={'text-blue-500'}
									href={'https://wakatime.com/settings/account'}
									rel={'noreferrer'}
									target={'_blank'}
								>
									{' Api key '}
								</a>
							</FormLabel>
							<FormControl>
								<Input placeholder={'api key'} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
					control={form.control}
					name={'WakaTimeApiKey'}
				/>
				<FormField
					render={({ field }) => (
						<FormItem>
							<FormLabel>Database days id </FormLabel>
							<FormControl>
								<Input placeholder={'id'} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
					control={form.control}
					name={'Days'}
				/>
				<FormField
					render={({ field }) => (
						<FormItem>
							<FormLabel>Database projects id </FormLabel>
							<FormControl>
								<Input placeholder={'id'} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
					control={form.control}
					name={'Projects'}
				/>
				<div className={'row justify-between'}>
					<Button type={'submit'}>Save</Button>
					<Button onClick={onTest} type={'button'} variant={'outline'}>
						Test
					</Button>
				</div>
			</form>
		</Form>
	)
}
