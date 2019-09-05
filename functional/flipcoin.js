const input=require('readline-sync');
let n=input.question('how many times you want to flip:');
tail=0;
head=0;
for(let i=1;i<=n;i++)
{
    let value=parseFloat(Math.random());
    if(value<0.5)
    tail++;
    else
    head++;


}
let hvstper=head/tail*100;
console.log("head vs tail percentages is :"+hvstper);
console.log(" number of heads are:"+head);
console.log('number of tails are:'+tail)