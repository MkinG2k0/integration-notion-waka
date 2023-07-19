import { privateProcedure, publicProcedure, router } from 'server/router'

export const userRouter = router({
	all: publicProcedure.query(({ ctx }) => {
		return ''
	}),
	getId: privateProcedure.query(({}) => {
		return 'asdsa'
	}),
})
