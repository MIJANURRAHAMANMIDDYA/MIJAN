const access=require('fs');
access.readFile('../oops/stock.json',(err,data)=>{
    if(err)
    throw "err"
    let value=JSON.parse(data);
    console.log(value);
    class stock
    { 
     report(){
    let stock1_price=(value.Stock[0].stock1.number_of_share)*(value.Stock[0].stock1.share_price);
    let stock2_price=(value.Stock[1].stock2.number_of_share)*(value.Stock[1].stock2.share_price);
    let stock3_price=(value.Stock[2].stock3.number_of_share)*(value.Stock[2].stock3.share_price);
    let stock4_price=(value.Stock[3].stock4.number_of_share)*(value.Stock[3].stock4.share_price);
    let total_price=stock1_price+stock2_price+stock3_price+stock4_price;
    console.log(".................STOCK REPORT.................");
    console.log((value.Stock[0].stock1.share_name)+"       stock1_price:"+stock1_price);
    console.log((value.Stock[1].stock2.share_name)+"           stock2_price:"+stock2_price);
    console.log((value.Stock[2].stock3.share_name)+"     stock3_price:"+stock3_price);
    console.log((value.Stock[3].stock4.share_name)+"           stock4_price:"+stock4_price);
    console.log("----------------------------------------------");
    console.log("              total_price:"+total_price);
     }
    }
    let obj=new stock();
    obj.report();
});
