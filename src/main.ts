import { app, BrowserWindow } from 'electron';

function createWindow () {
  const options: Electron.BrowserWindowConstructorOptions = {
    width: 960,
    height: 540,
    webPreferences: {
      nodeIntegration: true
    }
  }
  const win = new BrowserWindow(options);
  win.webContents.openDevTools();
  win.loadFile('app\\index.html');
}



app.whenReady().then(createWindow);