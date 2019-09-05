 function insertionsort(arr,n)
{
    let i,j,key;
    for(i=1;i<n;i++)
    {
        j=i;
        while(j>0 && arr[j-1]>arr[j])
        {
            key=arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=key;
            j--;
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
insertionsort(arr1,n);
