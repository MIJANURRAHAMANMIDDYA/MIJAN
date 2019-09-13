let q=require('../utility/queue');
const input=require('readline-sync');
let str1=input.question("enter the string:")
for(let k=0;k<str1.length;k++)
{
   q.enqueue(str1.charAt(k));
}
console.log(q.printqueue());
console.log(str1.length);
  for(let j=str1.length-1;j>=0;j--)
  {
      if(q.front()==str1.charAt(j))
        q.dequeue();
  }
if(q.isempty())
{
    console.log("palindrome string")
}
else
{
    console.log("not palindrome");
}