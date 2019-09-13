const q=require('../utility/queue');
const input=require('readline-sync');
q.enqueue("MIJANUR");
q.enqueue("SADDAM");
q.enqueue("CHANDAN");
q.enqueue("MOFIJUR");
console.log(q.printqueue());
let add=0;
console.log(q.size());
for(let k=0;k<q.size();k++)
{
    console.log(q.front());
    let value=input.questionInt("enter 1 for deposite and 0 for withdraw:");
    if(value==1)
     { 
        let sum=input.questionInt("how much money u want to deposite:")
        add=add+sum;
     }
      else if(value==0)
        {
          let sub=input.questionInt("enter amount to withdraw:");
          if(add>=sub)
              add-=sub;
         else
             console.log("not enough money!!!");
     }
    console.log("money left in bank:"+add);
    q.dequeue();

    console.log();
    }
