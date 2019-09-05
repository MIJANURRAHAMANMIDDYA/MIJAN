const access=require('../utility/allfunc');
const input=require('readline-sync');
let str=input.question("enter the string:");
let arr1=str.split('');
let size=arr1.length;
access.bubblesort(arr1,size);