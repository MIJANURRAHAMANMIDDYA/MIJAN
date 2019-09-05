
function triplet(arr,n)
{
 let  found=false;
for(let i=0;i<arr.length-2;i++)
{
    for(let j=i+1;j<arr.length-1;j++)
    {
        for(let k=j+1;k<arr.length;k++)
        {
         if(arr[i]+arr[j]+arr[k]==0)
         {
         console.log(arr[i]);
         console.log("")
         console.log(arr[j]);
         console.log("")
         console.log(arr[k]); 
         console.log("\n"); 
         found=true;
        }
    }
}
}
if( found==false)
{
    console.log("not exit");
}
}
let arr=[1,0,-1,2,1,-3];
let n=arr.length;
triplet(arr,n);