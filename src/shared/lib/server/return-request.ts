export const ReturnRequest = <T extends object>(data?: T | null, message?: string, error?: any) => {
	const returnData: { data?: T | null; error?: any; message?: string } = {}

	if (data) {
		returnData.data = data
	}
	if (message) {
		returnData.message = message
	}
	if (error) {
		returnData.error = error
	}

	return returnData
}
