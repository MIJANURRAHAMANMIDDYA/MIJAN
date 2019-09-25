const assert=require('chai').assert;
const value=require('../utility/allfunc');
let arr=new Array();
describe("test cases merge sort program",function()
{
    it("invalid",function()
    {
        let a=value.Merge(arr);
        assert.equal(a,"invalid");
    });
});