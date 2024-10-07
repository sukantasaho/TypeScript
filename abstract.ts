abstract class Employee
{
    eId:number;
    eName:string;
    basicSalary:number;
    constructor(eId:number,eName:string,basicSalary:number)
    {
        this.eId = eId;
        this.eName = eName;
        this.basicSalary = basicSalary;
    }
     Display():void
    {
        console.log(`Id - ${this.eId}\nName - ${this.eName}\nBasicSalary - ${this.basicSalary}`);
    }
  abstract CalSalary(hours:number);
  
}
class Trainner extends Employee
{
    subject:string;
    constructor(eId:number,eName:string,basicSalary:number, subject:string)
    {
          super(eId,eName,basicSalary);
          this.subject = subject;
    }
    Display()
    {
        super.Display();
        console.log(`Subject - ${this.subject}`);
    }
    CalSalary(hours: number) {
        let salary:number;
        salary = this.basicSalary*hours+(this.basicSalary*hours)*1.5/100.00;
        console.log(`Trainner Salary is : ${salary}`);
    }
}
class Admin extends Employee
{
    
    CalSalary(hours: number) {
        let salary:number;
        salary = this.basicSalary*hours+(this.basicSalary*hours)*2.5/100.00;
        console.log(`Admin Salary is : ${salary}`);
    }
    // Display()
    // {
    //     super.Display();
    // }
}
class HR extends Employee
{
    CalSalary(hours: number) {
        let salary:number;
        salary = this.basicSalary*hours+(this.basicSalary*hours)*3.5/100.00;
        console.log(`HR Salary is : ${salary}`);
    }
    // Display()
    // {
    //     super.Display();
    // }
}
var faculty : Trainner = new Trainner(101,"sukanta",4000,"SpringBoot");
faculty.Display();
faculty.CalSalary(48);
console.log("*********************")
var admin : Admin = new Admin(102,"Manoj",4000);
admin.Display();
admin.CalSalary(24);
console.log("*********************")
var hr:HR = new HR(103,"Banalaxmi",5000);
hr.Display();
hr.CalSalary(36);


