const CurrentCollectionName = 'MenuInfo'

const createMenuSchema = async (conn) => {

    const collectionNames = await conn.db(process.env.DB_NAME).listCollections().toArray()
    
    if (collectionNames.find(x => x.name === CurrentCollectionName))
        return console.log(`The collection ${CurrentCollectionName} already exists!`)

    await conn.db(process.env.DB_NAME).createCollection(CurrentCollectionName, {
        storageEngine: {
            wiredTiger: {}
        },
        capped: false,
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                title: 'MenuInfo',
                additionalProperties: false,
                properties: {
                  _id: {
                    bsonType: 'objectId'
                  },
                  id: {
                    bsonType: 'number'
                  },
                  storeName: {
                    bsonType: 'string'
                  },
                  timestamp: {
                    bsonType: 'number'
                  },
                  menu: {
                    bsonType: 'object'
                  }
                },
                required: [
                  'id',
                  'timestamp',
                  'menu'
                ]
              }
        },
        validationLevel: 'strict',
        validationAction: 'error'
    });
    await conn
        .db(process.env.DB_NAME)
        .collection(CurrentCollectionName)
        .createIndex({id: 1}, {unique: true})
    
    console.log(`The collection ${CurrentCollectionName} has been created!`)
}

module.exports = createMenuSchema;