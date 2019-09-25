const assert=require('chai').assert;
const value=require('../utility/allfunc');
let arr=[1,2,5,6];
describe("test cases triplet program",function()
{
    it("invalid value",function()
    {
        let a=value.Triplet("mijan");
        assert.equal(a,"invalid value");
    });
});