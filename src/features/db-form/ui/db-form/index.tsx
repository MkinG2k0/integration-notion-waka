'use client'

import { FC, ReactNode, useState } from 'react'

import { GetAuthData } from 'app/api/auth/route'

import { http } from 'shared'

import {
	Button,
	Form,
	FormItemProps,
	FormProps,
	Input,
	InputProps,
	Switch,
	SwitchProps,
} from 'antd'
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'
import { useForm } from 'antd/es/form/Form'
import { DatePicker } from 'antd/lib'

const URLRule: Required<FormItemProps>['rules'][number] = {}
// message: 'not valid URL', type: 'url'
interface DbFormProps {
	user: GetAuthData
}

const getStatus = (isStatus: boolean): { icon: ReactNode; status: InputProps['status'] } =>
	isStatus
		? { icon: <ExclamationCircleOutlined />, status: 'error' }
		: { icon: <CheckCircleOutlined />, status: '' }

const strCalendarId = 'calendarId'
const strLanguageId = 'languageId'
const strProjectsId = 'projectsId'
const strWakaApiKey = 'wakaApiKey'
const strIsSchedule = 'isSchedule'

export const DbForm: FC<DbFormProps> = ({ user }) => {
	const [form] = useForm()
	const [errorUrl, setErrorUrl] = useState({})
	const dayProject = getStatus(errorUrl[strCalendarId])
	const allProject = getStatus(errorUrl[strLanguageId])
	const language = getStatus(errorUrl[strProjectsId])
	const wakaApiKey = user?.waka?.wakaApiKey
	const isSchedule = user?.isSchedule
	const [scheduleDisable, setScheduleDisable] = useState<boolean>(!isSchedule)

	const { calendarId, languageId, projectsId } = user?.notion || {}

	const onChangeSchedule: SwitchProps['onChange'] = (checked) => {
		setScheduleDisable(!checked)
	}

	const onSubmit: FormProps['onFinish'] = (data) => {
		const newData = { ...data, time: data?.time?.toISOString?.() }
		console.log(newData)

		http.post('/user', newData).then()
	}

	const onBlur: InputProps['onBlur'] = (e) => {
		const { name, value } = e.target
		// const valid = !Boolean(e.target.ariaInvalid)
		// const parseUrlId = new URL(value).pathname.split('/')?.at(-1)

		if (!value) {
			return
		}
		http
			.get<{ data: any } | { status: number }>('/notion', { params: { id: value } })
			.then(({ data }) => {
				const error = 'status' in data && data.status === 400
				setErrorUrl((prevState) => ({ ...prevState, [name]: error }))
			})
	}

	return (
		<Form className={'col text-white'} form={form} layout={'vertical'} onFinish={onSubmit}>
			<FormItem
				initialValue={wakaApiKey}
				label={'Waka api key'}
				name={strWakaApiKey}
				rules={[{ required: true }]}
			>
				<Input name={wakaApiKey} />
			</FormItem>
			<a href={'https://wakatime.com/settings/api-key'} rel={'noreferrer'} target={'_blank'}>
				View api key
			</a>
			<FormItem
				initialValue={calendarId}
				label={'Day project url db'}
				name={strCalendarId}
				rules={[URLRule]}
			>
				<Input
					name={strCalendarId}
					onBlur={onBlur}
					prefix={dayProject.icon}
					status={dayProject.status}
				/>
			</FormItem>
			<FormItem
				initialValue={projectsId}
				label={'All project url db'}
				name={strProjectsId}
				rules={[URLRule]}
			>
				<Input
					name={strProjectsId}
					onBlur={onBlur}
					prefix={allProject.icon}
					status={allProject.status}
				/>
			</FormItem>
			<FormItem label={'Language url db'} name={strLanguageId} rules={[URLRule]}>
				<Input
					name={strLanguageId}
					onBlur={onBlur}
					prefix={language.icon}
					status={language.status}
				/>
			</FormItem>
			<div className={'row'}>
				<FormItem
					initialValue={isSchedule}
					label={'Schedule'}
					name={strIsSchedule}
					valuePropName={'checked'}
				>
					<Switch onChange={onChangeSchedule} />
				</FormItem>
				<FormItem label={'Time'} name={'time'}>
					<DatePicker disabled={scheduleDisable} picker={'time'} />
				</FormItem>
			</div>
			<Button htmlType={'submit'}>Save</Button>
		</Form>
	)
}
