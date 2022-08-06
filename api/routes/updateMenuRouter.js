const express = require('express');
const router = express.Router();
const {isValidAuth} = require('../controllers/authController');
const {updateMenuInfo, fetchStoreName} = require('../controllers/databaseController');
const fs = require('fs')


function generateTimestamp() {
    return Number(new Date());
}

async function formatMenuInfoToJSON(storeID, menuInfo) {
    return {
        id: storeID,
        timestamp: generateTimestamp(),
        menu: menuInfo
    }
}

router.post('/', async function(req, res, next) {

    const authOptions = {
        authToken: req.headers.authorization,
        storeID: Number(req.query.storeID)
    }

    const menuInfo = await formatMenuInfoToJSON(authOptions.storeID, req.body);

    const isValid = await isValidAuth(authOptions);

    if (isValid) {
        menuInfo.storeName = await fetchStoreName(authOptions.storeID);
        console.log(menuInfo);
        if (updateMenuInfo(menuInfo))
            res.send('Recieved');
        else
            res.sendStatus(404);
    }        
    else
        res.sendStatus(404);
    
});

module.exports = router;