const { getStoreInfo } = require('../database/storeInfoDAO');

/** 
 *  Returns a boolean value after checking if authToken is valid.
 *  @param {Object} authObject
 *  @param {Object} authObject.authToken `Bearer {TOKEN}`
 *  @param {Object} authObject.storeID The store which made the request
 *  @returns {Boolean}
 */
async function isValidAuth(data) {

    if (!data.authToken.includes('Bearer '))
        return false;

    data.authToken = cleanseAuth(data.authToken);

    const storeInfo = await getStoreInfo(data.storeID);

    if (!storeInfo)
        return false;

    return data.authToken === storeInfo.authToken;
}

/** 
 *  Returns the token without the Bearer
 *  @param {String} authToken `Bearer {Token}`
 *  @returns {String} `{Token}`
 */
function cleanseAuth(authToken) {
    return authToken.replace('Bearer ', '');
}

module.exports = {isValidAuth};