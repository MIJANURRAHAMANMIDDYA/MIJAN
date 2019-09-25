const assert=require('chai').assert;
const value=require('../utility/stack');
describe("Stack",function()
{
it("push element",function()
{
    let val=value.push(10);
    assert.equal(val,undefined);
});
it("push element",function()
{
    let val=value.push(20);
    assert.equal(val,undefined);
});
it("pop element",function()
{
 let val=value.pop();
 assert.equal(val,undefined);
});
it("front element",function(){
   let val=value.peek();
   assert.equal(val,10);
});
it("empty",function(){
    let val=value.isempty();
    assert.equal(val,false);
});
});

