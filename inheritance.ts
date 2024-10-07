class Employee
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
}
class Trainner extends Employee
{
    subject:string;
    constructor(eId:number,eName:string, basicSalary:number, subject:string)
    { 
        super(eId,eName,basicSalary)
        this.subject = subject;
    }
    DisplayTrainnerInfo()
    {
        console.log(`Trainner Id : ${this.eId}\nName : ${this.eName}\nBasic Salary : ${this.basicSalary}\nSubject : ${this.subject}`);
    }
}
var faculty : Trainner = new Trainner(101,"Sukanta",20000,"Core Java");
faculty.DisplayTrainnerInfo();
