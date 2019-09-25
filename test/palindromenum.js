const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases palindrome number program",function()
{
    it("invalid number",function()
    {
        let a=value.IsPalindromenum("mijan");
        assert.equal(a,"invalid number");
    });
});