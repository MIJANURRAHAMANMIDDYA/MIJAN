const assert=require('chai').assert;
const value=require('../utility/allfunc');
let arr=[1,5,4,6];
describe("test cases bubble sort for number program",function()
{
    it("invalid",function()
    {
        let a=value.BubbleSort(arr,"mijan");
        assert.equal(a,"invalid");
    });
});