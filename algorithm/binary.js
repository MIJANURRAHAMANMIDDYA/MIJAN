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
