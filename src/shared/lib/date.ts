export const formatDate = (date: Date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

export const get2week = (date: Date) => {
	return new Date(date.setDate(date.getDate() - 13))
}
