class replace
{
   replacement()
  {
        let today=new Date();
        let date=(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()).toString();
        console.log(date);
    let pattern="Hi,<<name>> your fullname is <<fullname>>,your mobile no is <<mobno>> and today date is <<date>>";
    let n=pattern.search("<<date>>");
    console.log(n);
    let changemessage=pattern.replace("<<name>>","Mijanur");
    console.log(changemessage);
    changemessage=changemessage.replace("<<fullname>>","Mijanur Rahaman Middya");
    console.log(changemessage);
    changemessage=changemessage.replace("<<mobno>>","8116007335");
    console.log(changemessage);
    changemessage=changemessage.replace("<<date>>",date);
    console.log(changemessage);
   

  }
}
let obj=new replace();
obj.replacement();
