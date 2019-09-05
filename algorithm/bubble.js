function bubblesort(arr, n)
{
 for(let i=0;i<n;i++)
 {  
     for(let j=0;j<n-i-1;j++)
     {
         if(arr[j]>arr[j+1])
         {
             let temp=arr[j];
             arr[j]=arr[j+1];
             arr[j+1]=temp;
         }
     }
  }
 console.log(arr);
  }	
  const input=require('readline-sync');
let n=input.question('enter size of array:');
let arr1=new Array(n);
for(let i=0;i<n;i++)
{
arr1[i]=input.questionInt("enter value:");
}
console.log(arr1);
bubblesort(arr1,n);
