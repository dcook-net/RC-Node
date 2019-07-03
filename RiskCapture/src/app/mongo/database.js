const MongoClient = require('mongodb').MongoClient;

module.exports = class database {
    constructor(connectionString, dbName, collectionName) {
        this.connectionString = connectionString || 'mongodb://localhost:27017';
        this.datbaseName = dbName || 'RiskCapture';
        this.collectionName = collectionName || 'WIPRisks';
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