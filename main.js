const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')
require('electron-reload')(__dirname)
let win

function createWindow() {
	win = new BrowserWindow({
		width: 324, height: 324,
		webPreferences: { nodeIntegration: true }
	})
	win.loadURL(url.format({
		pathname: path.join(__dirname, '/index.html'),
		protocol: 'file',
		slashes: true
	}))

	win.on('closed', () => {
		win = null
	})
	// win.openDevTools()

}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
	app.quit()
})

app.on('activate', () => {
	if (win == null) {
		createWindow()
	}
})