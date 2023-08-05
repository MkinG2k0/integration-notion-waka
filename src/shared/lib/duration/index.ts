export class Duration {
	endTime: number = Date.now()
	startTime: number = Date.now()

	end() {
		this.endTime = Date.now()

		return this.result()
	}

	result() {
		return this.endTime - this.startTime
	}

	start() {
		this.startTime = Date.now()
	}
}
