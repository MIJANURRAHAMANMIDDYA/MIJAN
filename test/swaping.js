const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases swaping program",function()
{
    it("invalid",function()
    {
        let a=value.Swap(123);
        assert.equal(a,"invalid");
    });
});