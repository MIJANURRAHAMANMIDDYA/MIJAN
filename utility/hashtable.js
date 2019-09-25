class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class hashtablechaining{
    constructor(size=11)
    {
        this.table=new Array(size);
    }
    computehash(num)
    {
        let hashkey=num%11;
        return hashkey;
    }
    insert(num)
    {
        let key=this.computehash(num);
        let node=new Node(num);
        if(this.table[key])
        {                                                
            node.next=this.table[key];
        }
        this.table[key]=node;

    }
    remove(num)
    {
        let key=this.computehash(num);
        if(this.table[key])
        {
            if(this.table[key].data===num)
            {
                this.table[key]=this.table[key].next;
            }
            else
            {
                let current=this.table[key].next;
                let prev=this.table[key];
                while(current)
                {
                    if(current.data==num)
                    {
                        prev.next=current.next;
                    }
                    prev=current;
                    current=current.next;
                }
            }
        }
    }

    contains(num)
    {
        for(let i=0;i<this.table.length;i++)
        {
            if(this.table[i])
            {
                let current=this.table[i];
                while(current)
                {
                    if(current.data===num)
                    {
                        return true;
                    }
                    current=current.next;
                }
            }
        }
        return  false;
    }
}
let hashtable=new hashtablechaining(11);
module.exports=hashtable;