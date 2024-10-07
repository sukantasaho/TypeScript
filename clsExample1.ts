class Employee
{
    eId:number;
    eName:string;
    eSal:number;
    eAddr:string;
    gender:string;
    //last is default parameter which is initialized if user is not provided this will be taken
    constructor(eId:number,eName:string,eSal:number,eAddr:string, gender:string="Male")
    {
        this.eId = eId;
        this.eName = eName;
        this.eSal = eSal;
        this.eAddr = eAddr;
        this.gender = gender;
    }
    DisplayEmployeeDetails()
    {
        let details = `EID - ${this.eId}\nENAME - ${this.eName}\nESAL - ${this.eSal}\nEADDR - ${this.eAddr}\nGENDER - ${this.gender}`;
        console.log(details);
    }
}
let e3:Employee = new Employee(101,"Sukanta Sahoo",10000,"Bhadrak");
e3.DisplayEmployeeDetails();
console.log("*****************************");
let e4:Employee = new Employee(101,"Banalaxmi Sahoo",10000,"Bhadrak","Female");
e4.DisplayEmployeeDetails();
