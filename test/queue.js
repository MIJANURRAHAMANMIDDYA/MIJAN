const assert=require('chai').assert;
const value=require('../utility/queue');
describe("queue",function()
{
it("enqueue",function()
{
    let val=value.enqueue(10);
    assert.equal(val,undefined);
});
it("dequeue",function()
{
    let val=value.dequeue(20);
    assert.equal(val,10);
});
});

