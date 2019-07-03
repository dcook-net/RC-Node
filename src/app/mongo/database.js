const MongoClient = require('mongodb').MongoClient;

module.exports = class database {
    constructor() {
        this.connectionString = process.env.MONGODBCONNSTRING;
        this.datbaseName = process.env.MONGODBNAME;
        this.collectionName = process.env.MONGOCOLLECTIONNAME;
    };
    
    async insert(wipRisk) {
        this.mongoClient = await MongoClient.connect(this.connectionString,
            {useNewUrlParser: true});

        const db = this.mongoClient.db(this.datbaseName);

        const collection = db.collection(this.collectionName);
        await collection.insertOne(wipRisk);
        
        await this.mongoClient.close();
    };
};