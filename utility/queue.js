let s=0;
//creation of queue class
class Queue
{
    constructor()
    {
        this.item=[];
    }
    //enqueue operation
    enqueue(element)
    { 
        s++;
        this.item.push(element);
    }
    //isempty method
    isempty()
    {
        return this.item.length==0;
    }
    //dequeue operation
   dequeue()
   {
     if(this.isempty())
         return"underflow"
     return this.item.shift();     
   }
   //front method
   front()
   {
    if(this.isempty())
       return "no element in the queue"
    return this.item[0];
   }
   //printqueue method
   printqueue()
   {
       let str="";
       for(let k=0;k<this.item.length;k++)
       
           str+=this.item[k]+" ";
        return str;
       
    }
    size()
    {
        return s;
    }
    peek()
    { 
        return this.item[this.item.length-1];
    }
}
let queue=new Queue();
module.exports=queue;
