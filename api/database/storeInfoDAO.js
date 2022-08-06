let stores;

class StoreInfoDAO {
    static async injectDB(conn) {
        if (stores)
            return;

        try {
            stores = await conn.db(process.env.DB_NAME).collection("StoreInfo");
        } catch (e) {
            console.error(`Unable to get collection in StoreInfoDAO: ${e}`);
        }
    }

    static async getStoreInfo(storeID) {
        try {
            return await stores.findOne({ id: storeID });
        } catch (e) {
            console.error(`Unable to fetch Store #${storeID} from StoreInfo: ${e}}`);
        }
    }

    static async getStoreName(storeID) {
        try {
            return await stores.findOne({id: storeID}, {projection: {storeName: 1}})
        } catch(e) {
            console.error(`Unable to fetch Store #${storeID} from StoreInfo: ${e}}`)
        }
    }

    static async addStoreInfo(store) {
        if (await this.getStoreInfo(store.id)) {
            console.error(`Unable to add Store #${store.id} to StoreInfo: Store already exists`);
            return null;
        }
        try {
            return await stores.insertOne({...store})
        } catch (e) {
            console.error(`Unable to insert to collection StoreInfo: ${e}`);
        }
    }
};

module.exports = StoreInfoDAO;