const access=require('../utility/allfunc');
const input=require('readline-sync');
let n=input.question("enter size of array:");
let arr=new Array(n);
for(let i=0;i<n;i++)
{
    arr[i]=input.question("enter value of string elemens:")
}
console.log(arr);
access.bubblesort(arr,n);
let data=input.question("enter data to find:");
access.Binarysearchnum(arr,0,n-1,n,data);
