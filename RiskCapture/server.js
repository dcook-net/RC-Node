const express = require('express');
const bodyParser = require('body-parser');
const getController = require('./src/app/controllers/getWip.js');
const postController = require('./src/app/controllers/postWip.js');
const requiredHeaders = require('./src/app/middleware/headerValidation.js');
const responseHeaders = require('./src/app/middleware/responseHeaders.js');
const helmet = require('helmet');

const app = express();
const port = 9010;

app.use(requiredHeaders);
app.use(responseHeaders);
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get("/capture/product/:product/version/:version/wip/:wipid", async function(req, res){
    await getController.get(req, res);
});

app.post("/capture/product/:product/version/:version", async function(req, res){
    await postController.post(req, res);
});

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing