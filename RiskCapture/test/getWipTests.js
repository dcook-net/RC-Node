const request = require('request-promise');
const chai = require('chai');
const expect = chai.expect;

describe('Fetch Wip Controller', function() {

    const baseUri = 'http://localhost:9010/capture/product/car/version/2.1';
    const invalidWipId = "5cf4ba96-49da-4f69-bf2e-f26fa30cb568";
    
    function BuildOptions(uri) {
        return {
            uri: uri,
            json: true,
            method: 'get',
            resolveWithFullResponse: true,
            simple: false
        };
    }
    
    it('Should return 404 when no wip found', async () => {

        const options = BuildOptions(`${baseUri}/wip/${invalidWipId}`);
        
        let res = await request(options);

        expect(res.statusCode).to.equal(404);
    });
    
    it('Should return Json Response', async () => {
        const options = BuildOptions(`${baseUri}/wip/${invalidWipId}`);

        let res = await request(options);

        expect(res.headers['content-type']).to.equal('application/json');
    });

});