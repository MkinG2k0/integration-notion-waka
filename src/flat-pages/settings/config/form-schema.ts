import { z } from 'zod'

export const formSchema = z.object({
	Days: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	Projects: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
})
