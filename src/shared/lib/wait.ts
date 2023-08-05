export const wait = async (time: number) => {
	return await new Promise((resolve, reject) => setTimeout(resolve, time))
}
