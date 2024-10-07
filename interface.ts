interface Person 
{
   name:string;
   getName():string;
}
interface PersonDetails extends Person
{
    age:number;
    gender:string;
}
interface Employee extends PersonDetails
{
    empCode:number;
}
//1st approach
//let e1 : Employee = <Employee>{};

//2nd approach
let e2 : Employee = <Employee>{
    age : 20,
    empCode : 10001,
    gender : "Female",
    name : "sukanta"
};
//e1.age = 20;
//e1.empCode = 10001;
//e1.gender = "Male";
//e1.name = "sukanta";
//console.log(`Age : ${e1.age}\nEmpCode : ${e1.empCode}\nGender : ${e1.gender}\nName : ${e1.name}`);
console.log(`Age : ${e2.age}\nEmpCode : ${e2.empCode}\nGender : ${e2.gender}\nName : ${e2.name}`);