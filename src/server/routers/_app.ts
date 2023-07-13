import { procedure, router } from 'server/trpc'
import { z } from 'zod'

export const appRouter = router({
	getUsers: procedure.query(({ ctx }) => {
		return userList
	}),

	hello: procedure
		.input(
			z.object({
				text: z.string(),
			}),
		)
		.query((opts) => {
			return {
				greeting: `hello ${opts.input.text}`,
			}
		}),
})

// export type definition of API
export type AppRouter = typeof appRouter

interface User {
	email: string
	id: string
	name: string
}

const userList: User[] = [
	{
		email: 'johndoe@gmail.com',
		id: '1',
		name: 'John Doe',
	},
	{
		email: 'abrahamsmith@gmail.com',
		id: '2',
		name: 'Abraham Smith',
	},
	{
		email: 'barbietracy@gmail.com',
		id: '3',
		name: 'Barbie Tracy',
	},
	{
		email: 'johnpayday@gmail.com',
		id: '4',
		name: 'John Payday',
	},
	{
		email: 'remembermyname@gmail.com',
		id: '5',
		name: 'Remember My Name',
	},
	{
		email: 'gotoschool@gmail.com',
		id: '6',
		name: 'Go to School',
	},
	{
		email: 'fishfruit@gmail.com',
		id: '7',
		name: 'Fish Fruit',
	},
	{
		email: 'donttry@gmail.com',
		id: '8',
		name: "Don't try",
	},
	{
		email: 'producerfeed@gmail.com',
		id: '9',
		name: 'Producer Feed',
	},
	{
		email: 'panicso@gmail.com',
		id: '10',
		name: 'Panic So',
	},
]
