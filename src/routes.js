const express = require('express');
const app = express();
const port = 3000;
const callbacks = require("./index.js");
var bodyParser = require('body-parser');
app.use(bodyParser.text());

app.post('/echo', callbacks);
app.listen(port);

console.log("Server running in port: " + port);