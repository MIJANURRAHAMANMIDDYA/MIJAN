const fs=require('fs');
let arr=new Array(6);
 fs.readFile('../utility/num.txt',(err,data)=>{
     if(err) throw err;
     arr=data.toString().split(',').sort();
  console.log(arr);
//linked list creation
function linkedlist()

    {
        this.head=null;
    }

    //cheaking wheather list is empty or not
    linkedlist.prototype.isempty=function()
    {
        return  this.head===null;
    }
    //size of list
    linkedlist.prototype.size=function()
    {
        let current=this.head;
        let count=0;
        while(current!==null)
        {
            count++;
            current=current.next;
        }
        return count;
    }
    //add in first
  linkedlist.prototype.prepend=function(val)
  {
      let newnode=
      {
          data:val,
          next:this.head
      }
      this.head=newnode;
  }
  //add to linearly
  linkedlist.prototype.append=function(val)
  {
      let newnode=
      {
        data:val,
        next:null
      }
  
  if(this.isempty())
  {
      this.head=newnode;
      return;
}
let current=this.head;
while(current.next!==null)
{
    current=current.next;
}
current.next=newnode;
}
//checking element is exit or not
linkedlist.prototype.contains=function(search)
{
    let current=this.head;
    while(current!==null)
    {
        if(current.data===search)
        {
           return true;
        }
        current=current.next;
    }
    return false;
}
// remove element
linkedlist.prototype.remove=function(serch)
{
if(!this.contains(serch))
{
    return;
}
if(this.head.data==serch)
{
    this.head=this.head.next;
    return;
}
let prev=null;
let current=this.head;
while(current.data!==serch)
{
    prev=current;
    current=current.next;
}
prev.next=current.next;
}
linkedlist.prototype.insertat=function(list,val)
{
    let current=this.head;
    let move=current.next;
      let num=
    {
      data:val,
      next:null
    }
    while(current!==null)
    {
        if(current.data>num.data)
        {
            list.prepend(num);
            break;
        }
        if(current.data<num.data && move.data>num.data)
        {
            current.next=num;
            num.next=move;
        }
        current=current.next;
        move=move.next;
        }
        if(current.data<val)
        {
            current.next=num;
        }
}
linkedlist.prototype.print=function()
{
    let output=' ';
    let current=this.head;
    while(current!==null)
    {
        output+=current.data;
    if(current.next!==null)
    {
        output+='-->';
    }
    current=current.next;
}
output+=' ';
console.log(output);
}

let list=new linkedlist();
for(let j=0;j<arr.length;j++)
{
list.append(arr[j]);
}
list.print();
const input=require("readline-sync");
let val=input.question("enter num to search:")
if(list.contains(val))
{
    list.remove(val);
}
else
{
  list.insertat(list,val);
}
list.print();
})
