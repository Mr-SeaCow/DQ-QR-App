
const { app, Menu, BrowserWindow, dialog } = require('electron')
const url = require('url')
const path = require('path');
const fs = require('fs');
const {genQRCode} = require('./modules/qrGen')
const { Store } = require('./modules/store');
//require('./excelFileReader/writer');

require('./ipc_controller/ipcMain');

let win

const defaultSaveOptions = function (storeID) { 
  return {
  //Placeholder 1
  title: "Save QR-Code",
  
  //Placeholder 2
  defaultPath : `${app.getPath('pictures')}/${storeID}.png`,
  
  //Placeholder 4
  buttonLabel : "Save QR-Code",
  
  //Placeholder 3
  filters :[
   {name: 'Images', extensions: ['png']},
  ]
 }
}

function createWindow() {
  win = new BrowserWindow({
    icon: path.resolve('/public/dqlogo.ico'),
    width: 450, height: 300, webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      autoHideMenuBar: false
    }
  })
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
  }))

  let menu = Menu.buildFromTemplate([{
    label: 'Options',
    submenu: [
      {
        label: 'Set Store ID',
        click() {
          promptModal(win, { view: 'updateStoreID' });
        }
      },
      {
        label: 'Set Auth Token',
        click() {
          promptModal(win, { view: 'updateStoreAuth' });
        }
      },
      {
        label: 'Set Store Name',
        click() {
          promptModal(win, { view: 'updateStoreName' });
        }
      }
    ]},
    {
      label: 'Generate QR-Code',
      async click() {
        const storeID = Store.get('StoreID');
        if (!storeID || storeID == '')
          return dialog.showErrorBox('No Store ID', 'A store id can be set in the options menu.')
        const save = await dialog.showSaveDialog(defaultSaveOptions(storeID));
        if (save.canceled == true)
          return;
        genQRCode(save.filePath, storeID);
      }
      }
  ])


  Menu.setApplicationMenu(menu);

  win.on('closed', function() {
    win = null
  })
}


app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function promptModal(parent, options, callback) {
  promptWindow = new BrowserWindow({
    width: 360, height: 120,
    'parent': parent,
    'show': false,
    'modal': true,
    'alwaysOnTop': true,
    'autoHideMenuBar': true,
    'webPreferences': {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  promptWindow.loadURL(path.join(__dirname, `./views/${options.view}.html`))
  promptWindow.once('ready-to-show', () => { promptWindow.show() })
}



app.on('ready', createWindow)