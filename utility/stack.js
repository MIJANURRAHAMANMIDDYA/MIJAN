// stack class creation

class Stack{
    constructor()
    {
    this.item=[];
    }
    // push method
    push(element)
    {
        this.item.push(element);
    }
    //pop method
    pop()
    {
        if(this.item.length==0)
            return "underflow";
        else
        this.item.pop();  
    }
    //peek method
    peek()
    {
        return this.item[this.item.length-1];
    }
    //isempty method
    isempty()
    {
        return this.item.length==0;
    }
    //print stack method
    printstake()
    {
         let str="";
        for(let i=0;i<this.item.length;i++)
        {
            str+=this.item[i]+" ";
            return str;
        }
        return str;
    }
}

let stack=new Stack();
module.exports=stack;