const assert=require('chai').assert;
const value=require('../utility/allfunc');
let arr=[1,2,5,6];
describe("test cases insertion sort for number program",function()
{
    it("invalid",function()
    {
        let a=value.InsertionSort(arr, "mijan");
        assert.equal(a,"invalid");
    });
});