const echo = require("./echo.js");

function echo_callback(req,res){
    res.send(echo(req.body));
}

module.exports = echo_callback;


