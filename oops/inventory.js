const access=require('fs');
access.readFile('../oops/inventory.json',(err,data)=>{
  if(err)
  throw "err"
  let value=JSON.parse(data);
  console.log(value);
  class calculation
  {
   display()
   {
  let price1=(value.inventory_details[0].Rice.weight)*(value.inventory_details[0].Rice.priceperkg);
  console.log(price1);
  let price2=(value.inventory_details[1].pulses.weight)*(value.inventory_details[1].pulses.priceperkg);
  console.log(price2);
  let price3=(value.inventory_details[2].wheats.weight)*(value.inventory_details[2].wheats.priceperkg);
  console.log(price3);
   }
  }
  let obj=new calculation();
  obj.display();

})