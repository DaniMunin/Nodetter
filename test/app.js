const assert = require('assert');
const echo = require("../src/echo.js");


describe('echo', function(){
    it('Should return its input: \"testInput\" ', function() {
        assert.equal(echo("testInput"),"testInput");
    })

});

