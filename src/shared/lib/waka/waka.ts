/* eslint max-lines: 0 */

import { WakaTimePayload } from 'shared/lib/waka/types/payload'
import { IStatusBar } from 'shared/lib/waka/types/status-bar'
import { rangeQueryParameters } from 'shared/lib/waka/config'
import { IProjects } from 'shared/lib/waka/types/projects'
import { IStats } from 'shared/lib/waka/types/stats'
import { ISummary } from 'shared/lib/waka/types'

import axios, { AxiosInstance } from 'axios'

export class WakaTimeClient {
	api: AxiosInstance

	constructor(public apiKey: string, public baseURL = 'https://wakatime.com/api/v1/') {
		const Authorization = `Basic ${Buffer.from(apiKey).toString('base64')}`

		this.api = axios.create({
			baseURL,
			headers: {
				Accept: 'application/json',
				Authorization,
				'Content-Type': 'application/json',
			},
		})
	}

	async getAgents(userId: WakaTimePayload.TUserId = 'current') {
		const { data } = await this.api.get(`users/${userId}/user_agents`)
		return data
	}

	async getAllTimeSinceToday(userId: WakaTimePayload.TUserId = 'current') {
		const { data } = await this.api.get(`users/${userId}/all_time_since_today`)
		return data
	}

	async getCommits(payload: WakaTimePayload.Commits) {
		const { author, page, projectName, userId = 'current' } = payload
		const { data } = await this.api.get(`users/${userId}/projects/${projectName}/commits`, {
			params: {
				author,
				page,
			},
		})
		return data
	}

	async getDurations(payload: WakaTimePayload.Durations) {
		const { branches, date, project, userId = 'current' } = payload
		const { data } = await this.api.get(`users/${userId}/durations`, {
			params: {
				branches: branches.join(','),
				date,
				project,
			},
		})
		return data
	}

	async getGoals(userId: WakaTimePayload.TUserId = 'current') {
		const { data } = await this.api.get(`users/${userId}/goals`)
		return data
	}

	async getHeartbeats(payload?: WakaTimePayload.Heartbeats) {
		const { date, userId = 'current' } = payload || {}
		const { data } = await this.api.get(`users/${userId}/heartbeats`, { params: { date } })
		return data
	}

	async getLeaders(payload?: WakaTimePayload.Leader) {
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

	async getOrganizationDashboardMemberDurations(payload: WakaTimePayload.OrgDashMemDuration) {
		const { dashboardId, memberId, organizationId, userId = 'current' } = payload
		const { data } = await this.api.get(
			`users/${userId}/orgs/${organizationId}` +
				`/dashboards/${dashboardId}/members/${memberId}/durations`,
		)
		return data
	}

	async getOrganizationDashboardMemberSummaries(payload: WakaTimePayload.OrgDashMemSummaries) {
		const { dashboardId, memberId, organizationId, userId = 'current' } = payload
		const { data } = await this.api.get(
			`users/${userId}/orgs/${organizationId}/` +
				`dashboards/${dashboardId}/members/${memberId}/summaries`,
		)
		return data
	}

	async getOrganizationDashboardMembers(payload: WakaTimePayload.OrgDashMembers) {
		const { dashboardId, organizationId, userId = 'current' } = payload
		const { data } = await this.api.get(
			`users/${userId}/orgs/${organizationId}/dashboards/${dashboardId}/members`,
		)
		return data
	}

	async getOrganizationDashboards(payload: WakaTimePayload.OrgDashboards) {
		const { organizationId, userId = 'current' } = payload
		const { data } = await this.api.get(`users/${userId}/orgs/${organizationId}`)
		return data
	}

	async getOrganizations(userId: WakaTimePayload.TUserId = 'current') {
		const { data } = await this.api.get(`users/${userId}/orgs`)
		return data
	}

	async getProjects(payload: WakaTimePayload.Projects) {
		const { page = 1, q, userId = 'current' } = payload
		const { data } = await this.api.get<IProjects>(`users/${userId}/projects`, {
			params: { page, q },
		})

		return data
	}

	async getStats(payload: WakaTimePayload.Stats) {
		const {
			project = null,
			range,
			timeout = null,
			userId = 'current',
			writes_only = null,
		} = payload
		const keyRange = rangeQueryParameters[range]

		const { data } = await this.api.get<IStats>(`users/${userId}/stats/${keyRange}`, {
			params: {
				project,
				timeout,
				writes_only,
			},
		})

		return data
	}

	async getStatusBar(userId?: WakaTimePayload.TUserId) {
		const { data } = await this.api.get<IStatusBar>(`users/${userId}/status_bar/today`)
		return data
	}

	async getSummary(payload: WakaTimePayload.Summary) {
		const { branches = [], end, project, start, userId = 'current' } = payload

		const { data } = await this.api.get<ISummary>(`users/${userId}/summaries`, {
			params: {
				branches: branches.join(','),
				end,
				project,
				start,
			},
		})

		return data
	}

	async getTeamMemberSummary(payload: WakaTimePayload.TeamMemberSummary) {
		const { branches = [], end, project, start, teamId, teamMemberId, userId = 'current' } = payload

		const { data } = await this.api.get(
			`users/${userId}/teams/${teamId}/members/${teamMemberId}/summaries`,
			{
				params: {
					branches: branches.join(','),
					end,
					project,
					start,
				},
			},
		)
		return data
	}

	async getTeamMembers(payload: WakaTimePayload.TeamMembers) {
		const { teamId, userId = 'current' } = payload
		const { data } = await this.api.get(`users/${userId}/teams/${teamId}/members`)
		return data
	}

	async getTeams(userId: WakaTimePayload.TUserId = 'current') {
		const { data } = await this.api.get(`users/${userId}/teams`)
		return data
	}

	async getUser(userId: WakaTimePayload.TUserId = 'current') {
		const { data } = await this.api.get(`users/${userId}`)
		return data
	}
}
