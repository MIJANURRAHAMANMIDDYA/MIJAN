const access=require('fs');
const input=require('readline-sync');
access.readFile('../oops/doctor.json',(err,data)=>{
    let doctorlist=JSON.parse(data);
 access.readFile('../oops/patient.json',(err,data)=>{
     let patientlist=JSON.parse(data);
class clinique
{
    constructor(name)
    {
    this.cliniquename=name;
    }
    Assigndoctor()
    {
        let doctorpatientlist=[];
        console.log("enter speciality:");
        let speciality=input.question("speciality;");
        for(let j=0;j<doctorlist.Doctor.length;j++)
        {
            if(doctorlist.Doctor[j].speciality===speciality)
            {
                if(doctorlist.Doctor[j].patientCount<5)
                {
                    console.log("enter patient details:");
                    patient1={
                        name:input.question("name:"),
                        id:input.question("id:"),
                        age:input.question("age:"),
                        disease:input.question("disease:"),
                        mobile_no:input.question("mobile no:"),
                    }
            console.log(patient1.name+"is assign to"+doctorlist.Doctor[j]["name"]);
            patientlist.Patient.push(patient1);
                }
            }
        }
        return console.log("no appoitment");
        

    }
  }
 })   
}
)