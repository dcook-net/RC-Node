const rp = require('request-promise');

module.exports = class riskValidation {
    constructor(){
        this.riskValidationServiceUri = process.env.RISKVALIDATIONURI;
    };
    
    async validate(product, version, wip, headers) {
        
        const validationUri = this.getValidationUri(product, version);
        
        const options = {
            uri : validationUri,
            method : 'post',
            body : wip.risk,
            json : true,
            resolveWithFullResponse : true,
            simple : false,
            headers : headers
        };

        const validationResult = await rp(options);

        if (validationResult.statusCode === 204 || validationResult.statusCode === 202 || validationResult.statusCode === 403) {
            return  {
                statusCode: validationResult.statusCode,
                isValid : validationResult.statusCode === 204,
                result : (validationResult.statusCode === 204 ? null : validationResult.body)
            };
        }
        
        // throw {
        //       message: "",
        //      
        // };
    };
    
    getValidationUri(product, version){
        return `${this.riskValidationServiceUri}validate/fullwip/product/${product}/version/${version}/`;
    };
};