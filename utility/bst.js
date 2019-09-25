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
    }
}

let bst=new BST();
module.exports=bst;