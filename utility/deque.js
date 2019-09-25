let len=0;
class deque
{
    constructor()
    {
    this.array=[];
  }
  addfront(element)
  {
    len++;
    return this.array.unshift();
  }
  addrear(element)
  {
      len++;
      return this.array.push(element);
  }
  removefront()
  {
      len--;
      return this.array.shift();

  }
  removerear()
  {
      len--;
      return this.array.pop();
 }
 isempty()
 {
     return this.array.length==0;
 }
 front()
 {   if(this.isempty())
       return"no element";
    return this.array[0];
 }
 printqueue()
   {
       let str="";
       for(let k=0;k<this.array.length;k++)
       
           str+=this.array[k]+" ";
        return str;
       
    }
}
let q=new deque();
module.exports=q;
//q.addrear(10);
//q.addrear(20);
//console.log(q.printqueue());