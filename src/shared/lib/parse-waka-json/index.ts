import { secondsToHms } from 'shared/lib/seconds-to-hms'

import fs from 'fs/promises'

interface IDate {
	data: Heart[]
	date: string
}

interface Heart {
	created_at: string
	id: string
	language: string
	project: string
	time: number

	type: string
}

const gap10min = 60 * 10

export const parseWakaJson = async (pathFile, pathResult: string, gap: number = gap10min) => {
	const data = JSON.parse(await fs.readFile(pathFile, { encoding: 'utf8' })) as IDate[]

	const time: { data: { project; time }[]; date }[] = []

	// time
	data.forEach(({ data, date }) => {
		if (data.length >= 2) {
			const day: { data; date } = { data: [], date }

			time.push(day)

			data.reduce((previousValue, currentValue) => {
				const time = currentValue.time - previousValue.time
				const splitSec = time >= gap ? 0 : time

				day.data.push({ project: previousValue.project, time: splitSec })

				return currentValue
			})
		}
	})

	// projects
	const dataProjects = time.map(({ data, date }) => {
		const projects = {}

		data.forEach(({ project, time }) => {
			if (projects[project]) {
				projects[project].sec += time
			} else {
				projects[project] = { name: project, sec: time }
			}
		})

		const arrProjects = Object.values<{ name: string; sec: number }>(projects)

		return { date, projects: arrProjects }
	})

	// set projects
	const uniqueProjects: Record<string, { date: string; sec: number }> = {}

	const times = dataProjects.map(({ date, projects }) => {
		let total = 0
		const data = projects.map((value) => {
			const { name } = value
			const time = secondsToHms(value.sec)

			total += value.sec

			if (!uniqueProjects[name]) {
				uniqueProjects[name] = { date, sec: value.sec }
			} else {
				uniqueProjects[name].sec += value.sec
			}

			return { name, time }
		})

		const totalTime = secondsToHms(total)

		return { date, projects: data, total: totalTime }
	})

	const projects = Object.entries(uniqueProjects).map(([name, value]) => {
		const time = secondsToHms(value.sec)
		return { name, time }
	})

	await fs.writeFile(pathResult, JSON.stringify({ projects, times }, undefined, 2))
}

export const simplifyWakaJson = async (pathFile: string, pathResultFile: string) => {
	const data = JSON.parse(await fs.readFile(pathFile, { encoding: 'utf8' })) as any

	const dataDays = data.days.map((day) => {
		const { date, heartbeats } = day

		const data = heartbeats.map((data) => {
			const { created_at, entity, id, language, project, time, type } = data

			return { created_at, entity, id, language, project, time, type }
		})

		return { data, date }
	})

	await fs.writeFile(pathResultFile, JSON.stringify(dataDays, undefined, 2))
}
