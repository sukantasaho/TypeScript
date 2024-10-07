//1st approach
//let e1 : Employee = <Employee>{};
//2nd approach
var e2 = {
    age: 20,
    empCode: 10001,
    gender: "Female",
    name: "sukanta"
};
//e1.age = 20;
//e1.empCode = 10001;
//e1.gender = "Male";
//e1.name = "sukanta";
//console.log(`Age : ${e1.age}\nEmpCode : ${e1.empCode}\nGender : ${e1.gender}\nName : ${e1.name}`);
console.log("Age : ".concat(e2.age, "\nEmpCode : ").concat(e2.empCode, "\nGender : ").concat(e2.gender, "\nName : ").concat(e2.name));
