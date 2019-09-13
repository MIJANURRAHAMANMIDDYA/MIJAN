const access=require('../utility/allfunc');
function stack()
{
    this.top=null;
}
stack.prototype.push=function(val)
{
    this.top=
    { 
        data:val,
        next:this.top
    }
}
stack.prototype.pop=function()
{
    let top=this.top;
    if(top)
    {
        let popvalue=this.top;
        console.log("poped:"+popvalue);
        top=top.next;
    }
    return;
}
let st=new stack();
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
  for(let k=0;k<one.length;k++)
{
    st.push(one[k]);
}
console.log(st);
 for(let p=0;p<one.length;p++)
 { 
   console.log("before poping:"+st);
   st.pop();
   console.log("after poping:"+st);
 }
st.pop();