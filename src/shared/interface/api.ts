export type Api<T> = {} & (
	| {
			data: T
			status: 200
	  }
	| {
			message: string
			status: 401
	  }
)
