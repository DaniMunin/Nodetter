const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.text());


app.post('/', function (req, res) {
    res.send(req.body);
})

app.listen(3000, function () {

})