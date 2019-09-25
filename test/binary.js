const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases binary program",function()
{
    it("invalid value",function()
    {
        let a=value.Binary("mijan");
        assert.equal(a,"invalid value");
    });
});