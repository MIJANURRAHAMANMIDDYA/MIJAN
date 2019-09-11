class BST
{

    factorial(num)
    {
        let result=1;
        for(let i=1;i<=num;i++)
        {
            result=result*i;
        }
        return result;

    }
    catalannum(n)
    {
        let catalannum=(this.factorial(2*n)/(this.factorial(n+1)*this.factorial(n)));
        return catalannum;
    }
    countbst(n)
    {
        let count=this.catalannum(n);
        console.log("count:"+count);
        return count;
    }
}
let bstcount=new BST();
const input=require('readline-sync');
let node=input.questionInt("enter value of node:")
//console.log(bstcount.factorial(5));
//console.log(bstcount.catalannum(5));
bstcount.countbst(node);