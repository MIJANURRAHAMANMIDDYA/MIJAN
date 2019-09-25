const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases finding number program",function()
{
    it("invalid",function()
    {
        let a=value.Findnum(12,"mijan");
        assert.equal(a,"invalid");
    });
});