const access=require('../utility/allfunc');
const input=require("readline-sync");
let n=input.question('enter the value:');
let arr=new Array(n);
let count=0;
function addarray(arr,num)
{
 if(arr.length==1)
 {
     arr[0]=num;
     console.log("added:"+arr);
     return arr;
 }
     for(let i=0;i<arr.length;i++)
     {
         if(arr[i]==num)
         break;
         if(arr[i]==0)
         {
         arr[i]=num;
         console.log("added:"+arr);
         return arr;
         }
     }
     return arr;
 }

while(true)
{
    count++;
    let num=parseInt((Math.random()*1000));
    console.log("peek is:"+num);
    arr=addarray(arr,num);
    if(access.isfull(arr))
    break;
}
console.log("number of random number to print:"+count);
console.log("random numbers are:");
for(let k=0;k<arr.length;k++)
{
    console.log(arr[k]);
}