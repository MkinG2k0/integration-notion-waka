/* eslint max-lines: 0 */
import {
	translateCommitsParameters,
	translateDurationParameters,
	translateStatsParameters,
	translateSummaryParameters,
} from 'shared/lib/waka/translate-query-parameters'
import { WakaTimePayload } from 'shared/lib/waka/types/payload'
import { rangeQueryParameters } from 'shared/lib/waka/config'
import { IProjects } from 'shared/lib/waka/types/projects'
import { IStats } from 'shared/lib/waka/types/stats'
import { ISummary } from 'shared/lib/waka/types'

import axios, { AxiosInstance } from 'axios'

export class WakaTimeClient {
	api: AxiosInstance

	constructor(protected apiKey, baseURL = 'https://wakatime.com/api/v1/') {
		const Authorization = `Basic ${Buffer.from(this.apiKey).toString('base64')}`

		this.api = axios.create({
			baseURL,
			headers: {
				Accept: 'application/json',
				Authorization,
				'Content-Type': 'application/json',
			},
			timeout: 10000,
		})
	}

	async getAgents(userId = 'current') {
		const { data } = await this.api.get(`users/${userId}/user_agents`)
		return data
	}

	async getAllTimeSinceToday(userId = 'current') {
		const { data } = await this.api.get(`users/${userId}/all_time_since_today`)
		return data
	}

	async getCommits(payload) {
		const { projectName, userId = 'current', ...parameters } = payload
		const { data } = await this.api.get(`users/${userId}/projects/${projectName}/commits`, {
			params: translateCommitsParameters(parameters),
		})
		return data
	}

	async getDurations(payload) {
		const { userId = 'current', ...parameters } = payload
		const { data } = await this.api.get(`users/${userId}/durations`, {
			params: translateDurationParameters(parameters),
		})
		return data
	}

	async getGoals(userId) {
		const { data } = await this.api.get(`users/${userId}/goals`)
		return data
	}

	async getHeartbeats(payload) {
		const { date, userId = 'current' } = payload
		const { data } = await this.api.get(`users/${userId}/heartbeats`, { params: { date } })
		return data
	}

	async getLeaders(payload) {
		const { language = null, pageNumber = null } = payload || {}

		const { data } = await this.api.get('leaders', { params: { language, page: pageNumber } })
		return data
	}

	async getMe() {
		const { data } = await this.api.get('users/current')
		return data
	}

	async getMetadata() {
		return await this.api.get('meta')
	}

	async getOrganizationDashboardMemberDurations(payload) {
		const { dashboardId, memberId, organizationId, userId = 'current' } = payload
		const { data } = await this.api.get(
			`users/${userId}/orgs/${organizationId}/dashboards/${dashboardId}/members/${memberId}/durations`
		)
		return data
	}

	async getOrganizationDashboardMemberSummaries(payload) {
		const { dashboardId, memberId, organizationId, userId = 'current' } = payload
		const { data } = await this.api.get(
			`users/${userId}/orgs/${organizationId}/` +
				`dashboards/${dashboardId}/members/${memberId}/summaries`
		)
		return data
	}

	async getOrganizationDashboardMembers(payload) {
		const { dashboardId, organizationId, userId = 'current' } = payload
		const { data } = await this.api.get(
			`users/${userId}/orgs/${organizationId}/dashboards/${dashboardId}/members`
		)
		return data
	}

	async getOrganizationDashboards(payload) {
		const { organizationId, userId = 'current' } = payload
		const { data } = await this.api.get(`users/${userId}/orgs/${organizationId}`)
		return data
	}

	async getOrganizations(userId = 'current') {
		const { data } = await this.api.get(`users/${userId}/orgs`)
		return data
	}

	async getProjects(payload: WakaTimePayload.Projects) {
		const { page = 1, userId = 'current' } = payload
		const { data } = await this.api.get<IProjects>(`users/${userId}/projects?page=${page}`)
		return data
	}

	async getStats(payload: WakaTimePayload.Stats) {
		const { range, userId = 'current', ...parameters } = payload
		const keyRange = rangeQueryParameters[range]

		const { data } = await this.api.get<IStats>(`users/${userId}/stats/${keyRange}`, {
			params: translateStatsParameters(parameters),
		})

		return data
	}

	async getSummary(payload: WakaTimePayload.Summary) {
		const { userId = 'current', ...parameters } = payload

		const { data } = await this.api.get<ISummary>(`users/${userId}/summaries`, {
			params: translateSummaryParameters(parameters),
		})

		return data
	}

	async getTeamMemberSummary(payload) {
		const { teamId, teamMemberId, userId = 'current', ...parameters } = payload

		const { data } = await this.api.get(
			`users/${userId}/teams/${teamId}/members/${teamMemberId}/summaries`,
			{
				params: translateSummaryParameters(parameters),
			}
		)
		return data
	}

	async getTeamMembers(payload) {
		const { teamId, userId = 'current' } = payload
		const { data } = await this.api.get(`users/${userId}/teams/${teamId}/members`)
		return data
	}

	async getTeams(userId = 'current') {
		const { data } = await this.api.get(`users/${userId}/teams`)
		return data
	}

	async getUser(userId = 'current') {
		const { data } = await this.api.get(`users/${userId}`)
		return data
	}
}
