const utility=require('../utility/allfunc');
let arr=[];
let i=0;
for(let k=2;k<=1000;k++)
{
    if((utility.isprime(k)==true)&&(utility.ispalindromenum(k)==true))
    {
        arr[i]=k;
        i++;
    }
}
console.log(arr);

//  for(let p=0;p<arr.length;p++)
//  {
 
//    for(let a=1;a<=1000;a++)
//     { 
//         if(utility.isanagram(arr[p].toString(),a.toString()))
//         {
//
//            console.log(arr[p]+"-->"+a);
//         }
//    }
// }
 