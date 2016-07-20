var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var {ipcMain} = require('electron');
var request = require('request');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        center: true
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});

