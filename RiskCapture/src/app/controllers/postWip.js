const WipRisk = require('./wipRisk');
const Database = require('./../mongo/Database');
const RiskValidation = require('./../validation/riskValidation');
const IdGenerator = require('./../mongo/bsonIdGenerator');

async function post(req, res) {

    const product = req.params.product;
    const version = req.params.version;
    const risk = req.body;
    const sessionId = req.headers['ctm-session-id'];
    const visitorId = req.headers['ctm-visitor-id'];
    
    const headers = {};
    
    const riskValidation = new RiskValidation();
    const wipRisk = new WipRisk(null, product, version, risk, sessionId, visitorId);
    
    const validationResult = await riskValidation.validate(product, version, wipRisk, headers);
    
    if (validationResult.statusCode === 403){
        res.status(403).end(validationResult.result);    
    }
    
    const database = new Database();
    const idGenerator = new IdGenerator();
    
    const wipId = idGenerator.generateId();
    
    await database.insert(wipRisk);
    
    const location = getLocationHeader(product, version, wipId);

    res.location(location);
    res.status(validationResult.statusCode).json(validationResult.result);
}

function getLocationHeader(product, version, wipId){
    return `/capture/product/${product}/version/${version}/wip/${wipId}`;
}

module.exports = {
    post
};