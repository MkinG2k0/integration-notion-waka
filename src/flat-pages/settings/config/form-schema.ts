import { z } from 'zod'

export const formSchema = z.object({
	Days: z.string().min(2, {
		message: 'Days must be at least 2 characters.',
	}),
	Projects: z.string().min(2, {
		message: 'Projects must be at least 2 characters.',
	}),
	WakaTimeApiKey: z.string().min(2, {
		message: 'WakaTimeApiKey must be at least 2 characters.',
	}),
})
