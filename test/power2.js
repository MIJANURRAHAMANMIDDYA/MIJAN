const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases power2program",function()
{
    it("invalid",function()
    {
        let a=value.Power2("mijan");
        assert.equal(a,"invalid");
    });
});