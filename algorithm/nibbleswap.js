const input=require('readline-sync');
let n=input.question("enter the number:");
let a;
let x="";
while(n>0)
{
a=n%2;
x=a+x;
n=parseInt(n/2);
}
let no=x.length;
let s="";
let zero=8-no;
while(zero>0)
{
    s=s+0;
    zero--;
}
s=s+x;
console.log("binary value of n is: "+s);
let arr=s.split('');
for(let i=0,j=4;i<4;i++,j++)
{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
let arr1=arr.join('');
console.log("after swaping:"+arr1);
let number=parseInt(arr1);
let i=0.0,value=0.0;
while(number>0)
{
    let digit=number%10;
    value=value+digit*Math.pow(2,i);
    i++;
    number=parseInt(number/10);
}
console.log("value is :"+value);