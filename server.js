const express = require('express');
const fs=require('fs');
const https = require('node:https');
const path = require('path');
const app = express();
const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/graphql', (req, res) => {
    res.send(`<h1>Hello World</h1>`);
});
const HttpsPort=https.createServer( options, app )
HttpsPort.listen(8000, function () {
    console.log(`Server running at http://localhost:8000/`);
});