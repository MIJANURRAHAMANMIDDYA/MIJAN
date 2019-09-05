const input=require('readline-sync');
let N=input.questionInt('enter the number:');
for(let i=2;i<N;i++)
{
    while(N%i==0){
    console.log(i);
    N=N/i;
    }
}
if(N>2)
console.log(N);