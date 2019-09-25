const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases string anagram program",function()
{
    it("invalid value",function()
    {
        let a=value.IsAnagram(false,true);
        assert.equal(a,"invalid value");
    });
});