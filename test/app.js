const assert = require('assert');

describe('randomTest', function(){

        it('Should return\"LUL\" ', function () {
            assert.equal("LuL".toUpperCase(),"LUL");
        })

});

describe('randomTest2', function(){
    it('Should return\"lul\" ', function() {
        assert.equal("   LUL   ".trim().toLowerCase(),"lul");
    })

});