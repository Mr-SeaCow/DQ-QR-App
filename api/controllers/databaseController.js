const {addMenuInfo, getMenuInfo} = require('../database/menuInfoDAO');
const {getStoreName} = require('../database/storeInfoDAO');

async function updateMenuInfo(menuInfoData) {
    return await addMenuInfo(menuInfoData);
}

async function fetchMenuInfo(storeID, i=0) {
    return (await getMenuInfo(storeID))[i];
}

async function fetchStoreName(storeID) {
    return (await getStoreName(storeID)).storeName;
}

module.exports = {updateMenuInfo, fetchMenuInfo, fetchStoreName};