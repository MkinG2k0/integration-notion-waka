export const ReturnRequest = <T extends object>(data: T | null, message?: string, error?: any) => ({
	data,
	error,
	message,
})
