const {app, BrowserWindow} = require('electron');
const isDev = require('electron-is-dev');

require('update-electron-app')()
require('@electron/remote/main').initialize();

const createWindow = () => {
    const win = new BrowserWindow({
        width: 900,
        height: 900,
        webPreferences: {
            nodeIntegration: false,
            enableRemoteModule: true,
            devTools: false
        }
    });

    const development = "http://localhost:3000";
    const production = "https://meusic-web-app.herokuapp.com";

    win.loadURL(isDev ? development : production);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
});