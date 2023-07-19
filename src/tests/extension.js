const vscode = require('vscode')
const fs = require('fs')
const path = require('path')

let projectStartTime = null
let projectEndTime = null

function activate(context) {
	const rootPath = vscode.workspace.rootPath
	const logFilePath = path.join(rootPath, 'project-time.log')

	// Запуск таймера при открытии проекта
	vscode.workspace.onDidOpenTextDocument(() => {
		projectStartTime = new Date()
	})

	// Остановка таймера при закрытии проекта
	vscode.workspace.onDidCloseTextDocument(() => {
		if (projectStartTime) {
			projectEndTime = new Date()

			const projectTime = projectEndTime - projectStartTime
			const formattedTime = formatTime(projectTime)

			const logData = `Project: ${rootPath}\nTime spent: ${formattedTime}\n\n`

			fs.appendFileSync(logFilePath, logData)

			projectStartTime = null
			projectEndTime = null
		}
	})
}

function formatTime(time) {
	const seconds = Math.floor(time / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)

	return `${hours}h ${minutes % 60}m ${seconds % 60}s`
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
}
