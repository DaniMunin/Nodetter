const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.text());

function echo(req,res){
    res.send(req.body);
};

app.post('/echo', echo);
app.listen(port);


console.log('Listening on port: ' +  port);


