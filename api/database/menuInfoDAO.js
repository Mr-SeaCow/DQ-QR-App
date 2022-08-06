let menus;

class MenuInfoDAO {
    static async injectDB(conn) {
        if (menus)
            return;

        try {
            menus = await conn.db(process.env.DB_NAME).collection("MenuInfo");
        } catch (e) {
            console.error(`Unable to get collection in StoreInfoDAO: ${e}`);
        }
    }

    static async getMenuInfo(storeID) {
        try {
            return await menus.find({ id: storeID }).sort({timestamp:-1}).toArray();
        } catch (e) {
            console.error(`Unable to fetch Store #${storeID} from StoreInfo: ${e}}`);
        }
    }

    static async addMenuInfo(menu) {
        
        try {
            return await menus.insertOne({...menu})
        } catch (e) {
            console.error(`Unable to insert to collection StoreInfo: ${e}`);
        }
    }
};

module.exports = MenuInfoDAO;