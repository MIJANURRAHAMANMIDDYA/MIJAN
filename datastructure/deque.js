const deque=require('../utility/deque');
const input=require('readline-sync');
console.log("string to checking for palindrome");
let string=input.question("enter string:");
for(let i=0;i<string.length;i++)
{
    deque.addrear(string.charAt(i));
}
console.log(deque.printqueue());
for(let k=string.length-1;k>=0;k--)
{
    if(deque.front()===string.charAt(k))
      deque.removefront();
}
if(deque.isempty())
{
    console.log("palindrome");
}
else
{
    console.log("not palindrome");
}