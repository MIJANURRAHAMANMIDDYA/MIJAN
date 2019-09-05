const input=require('readline-sync');
let str1=input.question("enter string1:");
let str2=input.question("enter string2:");
if(str1.length==str2.length)
{
let arr1=str1.split('');
let arr2=str2.split('');
arr1.sort();
arr2.sort();
console.log(arr1);
console.log(arr2);
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]==arr2[i])
    {
        console.log("strings are anagram");
        break;
    }
    else
    {
        console.log("not anagram");
        break;
    }
}
}