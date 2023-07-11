import { BASE_API } from 'shared/config/env'

export const AxiosConfig = {
	baseURL: BASE_API,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
}
