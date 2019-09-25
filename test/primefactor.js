const assert=require('chai').assert;
const value=require('../utility/allfunc');
describe("test cases primefactor program",function()
{
    it("invalid data",function()
    {
        let a=value.PrimeFactor(121);
        assert.equal(a,"invalid data");
    });
});