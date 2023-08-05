export const getProjectsDay = (data: any) => {
	const projectsArr: any[] = []

	data.days.forEach((day) => {
		day.projects.forEach((project) => {
			projectsArr.push({ ...project.grand_total, date: day.date, name: project.name })
		})
	})

	return projectsArr
}
