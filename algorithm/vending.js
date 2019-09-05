const input=require('readline-sync');
let change=input.questionInt("enter change value:");
function getchange(arr,change,index)
{
    for(let i=index;i>=0;i--)
    {
        if(change>=arr[i])
        {
            let note=parseInt(change/arr[i]);
            change=change-arr[i]*note;
             console.log("vending machine display as:"+arr[i]+"X"+note);
             if(change==0)
             {
              process.exit(0);
             }
             getchange(arr,change,index-1);
         }
    }
}
let arr=[1,2,5,10,100,500,1000];
getchange(arr,change,arr.length-1);
