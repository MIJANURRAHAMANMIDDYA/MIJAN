const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases replace program",function()
{
    it("invalid",function()
    {
        let a=value.Replace(121);
        assert.equal(a,"invalid");
    });
});