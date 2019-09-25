const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases leap year program",function()
{
    it("invalid year",function()
    {
        let a=value.LeapYear("mijan");
        assert.equal(a,"invalid year");
    });
});