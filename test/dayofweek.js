const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases for day of week program",function()
{
    it("invalid data",function()
    {
        let a=value.DayofWeek(12,"mi",1996);
        assert.equal(a,"invalid data");
    });
});