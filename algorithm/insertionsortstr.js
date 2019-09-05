const access=require('../utility/allfunc');
const input=require('readline-sync');
let str=input.question("enter the string:");
let size=str.length;
let arr=str.split('');
access.insertionsort(arr,size);
