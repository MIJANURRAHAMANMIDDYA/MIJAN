const input=require('readline-sync');
let str=input.question("enter the string:");
if(str.length==0)
{
    console.log("not possible");
}
if(str.length==1)
{
return str;
}
elseif(str.length==2)
{
return(str,str[1]+str[0]);
}