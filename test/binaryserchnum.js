const assert=require('chai').assert;
const value=require('../utility/allfunc');
let arr=[1,2,5,6];
describe("test cases binary serch num program",function()
{
    it("invalid data",function()
    {
        let a=value.BinarySearchnum(arr, 0, 12,13, "mijan");
        assert.equal(a,"invalid data");
    });
});