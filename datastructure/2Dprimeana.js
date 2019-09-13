const access=require('../utility/allfunc');

  console.log("prime number in range 0-1000:")
  
let array=new Array();
let i=0;
for(let k=0;k<=1000;k++)
{
    if(access.IsPrime(k))
    {
      array[i]=k;
    i++;
    }
}
console.log(array);
console.log("size:"+array.length);
let one=new Array();
let two=new Array();

for(let m=0;m<array.length;m++)
{
    let flag=false;
    for(let j=m+1;j<array.length;j++)
    {    if(array[j]!=-1)
        if(access.IsAnagram(array[m],array[j]))
        {
            flag=true;
            one.push(array[j])
           
            array[j]=-1;

        }
    }
    if(flag)
    {
        one.push(array[m]);
    }
    else if(flag==false&&array[m]!=-1)
    {
        two.push(array[m]);
        
    }
}

console.log("array with all prime and anagram");
console.log(one+"\ncount:"+one.length);
console.log("array with prime but not anagram");
console.log(two+"\ncount:"+two.length);
console.log("array with prime and anagram");
//TwoArray(one,two);
let array1=[];
while(one.length>0)
{
    array1.push(one.splice(0,12));
}
console.log(array1);
let array2=[];
while(two.length>0)
{
    array2.push(two.splice(0,9));
}
console.log(array2);

