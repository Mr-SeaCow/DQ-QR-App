const { ipcMain } = require('electron');
const { excelParse } = require('../modules/reader');
const fs = require('fs');
const axios = require('axios');
const {Store} = require('../modules/store')

const EType = Object.freeze({
   0: 'StoreID',
   1: 'AuthToken',
   2: 'StoreName'
});


function buildOptions(data) {
   
   const config = getStore();
   const options = {
      url: '/updateMenu',
      method: 'post',
      baseURL: 'http://alr-menu.com/api',
      headers: {
         authorization: `Bearer ${config.AuthToken}`
      },
      params: {
         storeID: config.StoreID         
      },
      data,
      withCredentials: true
   }

   return options;

}

// function fetchConfigFile() {
//    return JSON.parse(fs.readFileSync('./config.json'))
// }

function getStore() {

   return {
      StoreID: Store.get('StoreID'),
      AuthToken: Store.get('AuthToken')
   }

}

ipcMain.on('setFilePath', async (event, arg) => {
   const parsed = await excelParse(arg);
   // const strObj = JSON.stringify(parsed, null, 1);

   const options = buildOptions(parsed);

   axios(options).then(resp => {
      console.log(resp)
      event.sender.send('parseFinished', true)
   })
   .catch(err => {
      console.log(err)
      event.sender.send('parseFinished', false)
   })

})

ipcMain.on("openDialog", (event, data) => {
   event.returnValue = JSON.stringify(promptOptions, null, '')
})

ipcMain.on("closeDialog", (event, data) => {
   promptAnswer = data
})

ipcMain.on("updateSettings", async (event, data) => {
      const {val, type} = data;

      // let currentConfig = fs.readFileSync('./config.json');
      
      // currentConfig = JSON.parse(currentConfig);

      Store.set(EType[type], val);
      event.sender.send('updateFinished', true)
      // fs.writeFile('./config.json', JSON.stringify(currentConfig, null, 2), ()=> {
      //    event.sender.send('updateFinished', true)
      // });
}) 