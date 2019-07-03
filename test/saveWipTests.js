const request = require('request-promise');
const builder = require('./requestBuilder');
const chai = require('chai');
const expect = chai.expect;

describe('Fetch Wip Controller', async function () {

    const baseUri = 'http://localhost:9010/capture/product/car/version/2.1';
    let requestBuilder;
    
    beforeEach(function() {
        requestBuilder = new builder(baseUri);
    });

    it(`Should return Bad Request when required header ctm-session-id is missing`, async () => {
        const requestHeaders = {
            // {'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'},
            'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-user-agent': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'
        };

        const options = requestBuilder
                        .withHeaders(requestHeaders)
                        .build();

        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-session-id: The \'ctm-session-id\' header is required'
        }]);
    });

    it(`Should return Bad Request when required header ctm-visitor-id is missing`, async () => {

        const requestHeaders = {
            'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            // {'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-user-agent': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'};

        const options = requestBuilder
                        .withHeaders(requestHeaders)
                        .build();
        
        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-visitor-id: The \'ctm-visitor-id\' header is required'
        }]);
    });

    it(`Should return Bad Request when required header ctm-correlation-id is missing`, async () => {

        const requestHeaders = {
            'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            // 'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-user-agent': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'};

        const options = requestBuilder
            .withHeaders(requestHeaders)
            .build();
        
        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-correlation-id: The \'ctm-correlation-id\' header is required'
        }]);
    });

    it(`Should return Bad Request when required header ctm-causation-id is missing`, async () => {

        const requestHeaders = {
            'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            // 'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-user-agent': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'};

        const options = requestBuilder
            .withHeaders(requestHeaders)
            .build();
        
        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-causation-id: The \'ctm-causation-id\' header is required'
        }]);
    });

    it(`Should return Bad Request when required header ctm-user-agent is missing`, async () => {

        const requestHeaders = {
            'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'};
            // 'ctm-user-agent': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'

        const options = requestBuilder
            .withHeaders(requestHeaders)
            .build();
        
        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-user-agent: The \'ctm-user-agent\' header is required'
        }]);
    });

    it(`Should return Bad Request when required header ctm-session-id is empty`, async () => {

        const requestHeaders = {
            'ctm-session-id': '',
            'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-user-agent': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'};

        const options = requestBuilder
            .withHeaders(requestHeaders)
            .build();
        
        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-session-id: The \'ctm-session-id\' header is empty'
        }]);
    });

    it(`Should return Bad Request when required header ctm-visitor-id is empty`, async () => {

        const requestHeaders = {
            'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-visitor-id': '',
            'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-user-agent': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'};

        const options = requestBuilder
            .withHeaders(requestHeaders)
            .build();
        
        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-visitor-id: The \'ctm-visitor-id\' header is empty'
        }]);
    });

    it(`Should return Bad Request when required header ctm-correlation-id is empty`, async () => {

        const requestHeaders = {
            'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-correlation-id': '',
            'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-user-agent': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'};

        const options = requestBuilder
            .withHeaders(requestHeaders)
            .build();
        
        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-correlation-id: The \'ctm-correlation-id\' header is empty'
        }]);
    });

    it(`Should return Bad Request when required header ctm-causation-id is empty`, async () => {

        const requestHeaders = {
            'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-causation-id': '',
            'ctm-user-agent': '695008ca-b5e2-472a-ae3e-4fcf92290ed2'};

        const options = requestBuilder
            .withHeaders(requestHeaders)
            .build();
        
        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-causation-id: The \'ctm-causation-id\' header is empty'
        }]);
    });

    it(`Should return Bad Request when required header ctm-user-agent is empty`, async () => {

        const requestHeaders = {
            'ctm-session-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-visitor-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-correlation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-causation-id': '695008ca-b5e2-472a-ae3e-4fcf92290ed2',
            'ctm-user-agent': ''};
        
        const options = requestBuilder
            .withHeaders(requestHeaders)
            .build();
        
        const res = await callSUT(options);

        expect(res.statusCode).to.equal(400);
        expect(res.body).to.deep.equal([{
            message: 'ctm-user-agent: The \'ctm-user-agent\' header is empty'
        }]);
    });

    it(`Should return 204, with no warnings, when risk passes validation`, async () => {
        const options = requestBuilder.build();
    
        const res = await callSUT(options);
        
        // expect(res.headers['location']).to.equal('capture/product/car/version/2.1/wipid/123456');
        // expect(res.statusCode).to.equal(204);
        expect(res.body).to.deep.equal(undefined);
    });
    
    it('Should return 204, with warnings, when risk passes validation but is incomplete', async () => { 
        let risk = requestBuilder.riskObject;
        risk.risk.VehicleUsage = {};
        
        const options = requestBuilder.withRisk(risk).build();
        
        const res = await callSUT(options);
        
        // expect(res.statusCode).to.equal(204);
        expect(res.body).to.deep.equal({
            errors:[],
            incompleteFields :[
                "risk.VehicleUsage.VehicleIsUsedFor",
                "risk.VehicleUsage.AnnualPersonalMileage",
                "risk.VehicleUsage.VehicleKeptDuringTheDay",
                "risk.VehicleUsage.OvernightParking",
                "risk.VehicleUsage.OvernightAddress",
                "risk.VehicleUsage.NumberOfVehiclesInHousehold"
            ]
        });
    });
    
    const callSUT = async (options) => {
        return await request(options);
    };
});