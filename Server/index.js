const express = require("express");
const bodyParser = require("body-parser");
const server = express();
server.use(bodyParser.json());

server.listen(3000, () => {
    console.log(`Server running`);
});
// Get
server.get('/', (req, res) => {
    res.send('Hello!!!')
});