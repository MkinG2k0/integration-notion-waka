import axios, { AxiosInstance, AxiosResponse } from 'axios'

interface WakaTimeProject {
	id: string
	name: string
}

interface WakaTimeSummary {
	grand_total: {
		productivity_pulse: number
		total_seconds: number
	}
	// Добавьте поля согласно ответу API WakaTime
}

class WakaTimeClient {
	private readonly api: AxiosInstance

	constructor(apiKey: string) {
		this.api = axios.create({
			baseURL: 'https://wakatime.com/api/v1',
			headers: {
				Authorization: `Basic ${apiKey}`,
			},
		})
	}

	private handleRequest<T>(request: Promise<AxiosResponse<T>>): Promise<T> {
		return request
			.then((response: AxiosResponse<T>) => response.data)
			.catch((error) => {
				throw new Error(`WakaTime API Error: ${error.message}`)
			})
	}

	getProjects(): Promise<WakaTimeProject[]> {
		return this.handleRequest<WakaTimeProject[]>(this.api.get('/users/current/projects'))
	}

	getSummary() {
		return this.handleRequest<WakaTimeSummary>(this.api.get('/users/current/summaries'))
	}

	// Добавьте остальные методы для других конечных точек (endpoints) API WakaTime

	// Пример:
	getUserInfo(): Promise<any> {
		return this.handleRequest<any>(this.api.get('/users/current'))
	}

	// Добавьте дополнительные методы для других конечных точек по мере необходимости
}
