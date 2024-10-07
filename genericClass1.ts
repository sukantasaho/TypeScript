class ObjectManagement<S,T,U>{
    private employee:S;
    private student:T;
    private user:U;

    constructor(employee:S, student:T, user:U)
    {
         this.employee = employee;
         this.student = student;
         this.user = user;
    }
    Display():void{
        //console.log(`Employee Objects List - ${this.employees[0]}`);
        
        console.log(`Student Objects List - ${this.student}`);
        console.log(`User Objects List - ${this.user}`);
        
         
    }
}
class Employee {
    eid:number;
    ename:string;
    constructor(eid:number,ename:string){
       this.eid = eid;
       this.ename = ename;
    }
}
class Student{
    sid:number;
    sname:string;
    constructor(sid:number,sname:string){
        this.sid = sid;
        this.sname = sname;
     }
}
class User{
    uid:number;
    uname:string;
    constructor(uid:number,uname:string){
        this.uid = uid;
        this.uname = uname;
     }
}
//Employee Array
let e1:Employee = new Employee(101,"sukanta");
//let e2:Employee = new Employee(102,"manoj");
//let empArray:Employee[] = [e1,e2];
//empArray[0] = e1;
//empArray[1] = e2;

//Student Array
let std1:Student = new Student(201,"Amrita");
//let std2:Student = new Student(202,"Rajendra");
//let stdArray:Student[] = [std1,std2];
//stdArray[0] = std1;
//stdArray[1] = std2;

//User Array
let u1:User = new User(301,"Prakash");
//let u2:User = new User(302,"Saroj");
//let userArray:User[] = [u1,u2];
//userArray[0] = u1;
//userArray[1] = u2;

let objects:ObjectManagement<Employee,Student,User> = new ObjectManagement<Employee,Student,User>(e1, std1, u1);
objects.Display();