const input=require('readline-sync');
const access=require('fs');
access.readFile('../oops/adressbook.json',(err,data)=>
{
    if (err) 
    throw "err";
  let value=JSON.parse(data);
  class Addressbook
  {
    
    Add(value)
  {
    let person=
    {
    "name":input.question("enter name:"),
    "id":input.question("enter id:"),
    "address":input.question("enter address:"),
    "city":input.question('enter city:'),
    "phno":input.question("enter phno:")
    }
    value.Addressbook.push(person);
    console.log(value);
    let value1=JSON.stringify(value);
    access.writeFileSync('../oops/adressbook.json',value1);
  }
  Edit(value)
{
  console.log("enter id which you want to edit:")
  let number=input.question("value:");
  for(let i=0;i<value.Addressbook.length;i++)
     {
       if(value.Addressbook[i]["id"]==number)
       {
         console.log("enter propertyname:");
         let str=input.question();
         console.log("enter new value:");
         let str1=input.question();
         value.Addressbook[i][str]=str1;
      }
     }
     console.log(value);
     let value1=JSON.stringify(value);
     access.writeFileSync('../oops/adressbook.json',value1);
}
Deleteobj(value)
{
 console.log("enter number which u want to delete:");
 let num=input.question("value:");
 delete value.Addressbook[num];
 console.log(value);
 let value1=JSON.stringify(value);
 access.writeFileSync('../oops/adressbook.json',value1);

}
 Sorting(value)
{
   function sortByProperty(property) 
   {
    return function (x, y)
       {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
  }
    value.Addressbook.sort(sortByProperty("name"));;
  console.log(value);
  let value1=JSON.stringify(value);
  access.writeFileSync('../oops/adressbook.json',value1);

}
  }
  let obj=new Addressbook();
  try{
console.log("enter 1 for add,2 for edit,3 for delete and 4 for sort by name");
let val=input.questionInt("enter value:");
if(typeof val!=='number')
{
  throw "invalid data"
}
switch(val)
{
  case 1:obj.Add(value);
         break;
  case 2:obj.Edit(value);
          break;
  case 3: obj.Deleteobj(value);
           break;
  case 4:  obj.Sorting(value);
            break;
}
  }
catch(err)
{
  return err;
}
})