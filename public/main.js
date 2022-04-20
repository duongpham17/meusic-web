const {app, BrowserWindow} = require('electron');

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
    win.loadURL("https://meusic.herokuapp.com");
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
});