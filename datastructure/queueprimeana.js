const access=require('../utility/allfunc');
class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class Queue
{
    constructor()
    {
        this.tail=null;
        this.head=null;
    }
enqueue(element)
{
    let node=new Node(element);
    if(!this.head)
    {
        this.head=node;
        this.tail=node;
    }
    else
    {
        this.tail.next=node;
        this.tail=node;
    }
}
dequeue()
{
    if(!this.head)
    {
      return "no element"
    }
    else{
        let elementtopop=this.head;
        this.head=this.head.next;
        return elementtopop;
    }
  }
size()
{
    let count=0;
    let current=this.head;
    while(current)
    {
        count++;
        current=current.next;
    }
    return count;
  }
} let q=new Queue();
//q.enqueue(10);
//q.enqueue(20);

let array=new Array();
let i=0;
for(let k=0;k<=1000;k++)
{
    if(access.IsPrime(k))
    {
      array[i]=k;
    i++;
    }
}
console.log(array);
let one=new Array();
let two=new Array();

for(let m=0;m<array.length;m++)
{
    let flag=false;
    for(let j=m+1;j<array.length;j++)
    {    if(array[j]!=-1)
        if(access.IsAnagram(array[m],array[j]))
        {
            flag=true;
            one.push(array[j])
           
            array[j]=-1;

        }
    }
    if(flag)
    {
        one.push(array[m]);
    }
    else if(flag==false&&array[m]!=-1)
    {
        two.push(array[m]);
        
    }
}
console.log("array with all prime and anagram");
console.log(one+"\ncount:"+one.length);
for(let i=0;i<one.length;i++)
{
    q.enqueue(one[i]);
}
console.log(q);