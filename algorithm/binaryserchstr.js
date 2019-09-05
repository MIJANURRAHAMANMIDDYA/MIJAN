const accecs=require('../utility/allfunc');
  const input=require('readline-sync');
  let str=input.question("enter the string:");
  let arr1=str.split('');
  let arr2=arr1.sort();
  console.log(arr2);
  let data=input.question("enter the finding string:")
 accecs.Binarysearchnum(arr2,0,(arr2.length)-1,arr2.length,data);
   
