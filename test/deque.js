const assert=require('chai').assert;
const value=require('../utility/deque');
describe("deque",function()
{
it("addrear",function()
{
    let val=value.addrear(10);
    assert.equal(val,1);
});
it("addfront",function()
{
    let val=value.addfront(20);
    assert.equal(val,1);
});
});

