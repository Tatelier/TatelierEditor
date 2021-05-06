import { app, BrowserWindow } from 'electron';

function createWindow () {
  const options: Electron.BrowserWindowConstructorOptions = {
    width: 960,
    height: 540,
    webPreferences: {
      nodeIntegration: true  // Node 機能の使用を許可
    }
  }
  const win = new BrowserWindow(options);
  win.loadFile('index.html');
}

// Electron の初期化が完了したらウィンドウを作成
app.whenReady().then(createWindow);