const express = require("express");
const bodyParser = require("body-parser");
const server = express();

var admin = require("firebase-admin");

var serviceAccount = require("./firebase-admin.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

server.use(bodyParser.json());

server.listen(3000, () => {
    console.log(`Server running`);
});
// Get
server.get('/', (req, res) => {
    res.send('Hello!!!')
});