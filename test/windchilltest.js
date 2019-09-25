const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe('test cases for windchill program',function(){
    it("invalid value of temperature",function(){
        let a=value.TempSpeed("mi",2);
        assert.equal(a,"invalid value of temperature")
    });
    it("invalid value of speed",function(){
        let a=value.TempSpeed(20,"mi");
        assert.equal(a,"invalid value of speed")
    });

});
