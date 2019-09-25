function stack()
{
    this.top=null;
}
stack.prototype.push=function(val)
{
    this.top=
    { 
        data:val,
        next:this.top
    }
}
stack.prototype.pop=function()
{
    let top=this.top;
    if(top)
    {
        let popvalue=this.top;
        console.log("poped:"+popvalue);
        top=top.next;
    }
    return;
}
let stack=new stack();
module.exports=stack;