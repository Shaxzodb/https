import express  from 'express';
import fs from 'fs';
import https from'https';
import path from 'path';
const app = express();
// const options = {
//     key: fs.readFileSync('./cert/key.pem'),
//     cert: fs.readFileSync('./cert/cert.pem')
// };
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/graphql', (req, res) => {
    res.send(`<h1>Hello World</h1>`);
});
// const HttpsPort=https.createServer( options, app )
const PORT = process.env.PORT || 8000;
// HttpsPort.listen(PORT, function () {
//     console.log(`Server running at `);
// });
app.listen(PORT, function () {
    console.log(`Server running at `);
});