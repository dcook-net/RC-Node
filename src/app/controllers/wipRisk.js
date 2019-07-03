module.exports = class wipRisk{
    constructor(id, product, version, risk, sessionId, visitorId, modifiedAt, wipVersion){
        this.id = id || 1234,
        this.product = product,
        this.version = version,
        this.sessionId = sessionId,
        this.visitorId = visitorId,
        this.risk = risk,
        this.modifiedAt = modifiedAt || Date.now(),
        this.wipVersion = wipVersion || 0;    
    }

    id() {
        return this.id;
    };
    
    product() { 
        return this.product; 
    };
    
    version(){
        return this.version;
    }

    sessionId(){
        return this.sessionId;
    };

    visitorId(){
        return this.visitorId;
    };

    risk(){
        return this.risk;
    };

    modifiedAt(){
        return this.modifiedAt;
    };

    wipVersion(){
        return this.wipVersion;
    };
    
    setId(id) {
        this.id = id;
    };
    
    setProduct(product){
        this.product = product;
    };

    setVersion(version){
        this.version = version;
    };

    setSessionId(sessionId){
        this.sessionId = sessionId;
    };

    setVisitorId(visitorId){
        this.visitorId = visitorId;
    };

    setRisk(risk){
        this.risk = risk;
    };

    setModifiedAt(modifiedAt){
        this.modifiedAt = modifiedAt;
    };

    setWipVersion(version){
        this.wipVersion = version;
    };
};