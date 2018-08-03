'use strict'

const path              = require('path');
const url               = require('url');
const os                = require('os');
const network           = require('./network');
const config            = require('./app/config');
const _                 = require('lodash');
const electron          = require('electron');
const ElectronConfig    = require('electron-config');
const {
  app,
  BrowserWindow,
  ipcMain: ipc,
  Menu,
  protocol: electronProtocol,
  session,
  shell,
} = electron;


let mainWindow          = null;
const DEFAULT_WIDTH     = 800;
const DEFAULT_HEIGHT    = 610;
const MIN_WIDTH         = 640;
const MIN_HEIGHT        = 360;
let userConfig          = new ElectronConfig();
let windowConfig        = userConfig.get('window');
const startInTray       = process.argv.some(arg => arg === '--start-in-tray');

function IsWindows () {
    return process.platform === 'win32';
}

config.ini();

app.on('window-all-closed', () => {
    if(IsWindows()) app.quit();
})

app.on('ready', () => {
    const windowOptions = Object.assign(
    {
        show: !startInTray, // allow to start minimised in tray
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        minWidth: MIN_WIDTH,
        minHeight: MIN_HEIGHT,
        autoHideMenuBar: false,
        webPreferences: {
        nodeIntegration: false,
        nodeIntegrationInWorker: false,
        // sandbox: true,
        preload: path.join(__dirname, 'preload.js'),
        nativeWindowOpen: true,
        },
        icon: path.join(__dirname, 'images', 'about.png'),
    },
    _.pick(windowConfig, [
        'maximized',
        'autoHideMenuBar',
        'width',
        'height',
        'x',
        'y',
    ]));
    console.log(global.test);
    mainWindow = new BrowserWindow(windowOptions);
    mainWindow.loadURL(`file://${__dirname}/background.html`);
    mainWindow.on('closed', () => {
        mainWindow = null;
    })
})


