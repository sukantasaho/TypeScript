var ObjectManagement = /** @class */ (function () {
    function ObjectManagement(employee, student, user) {
        this.employee = employee;
        this.student = student;
        this.user = user;
    }
    ObjectManagement.prototype.Display = function () {
        //console.log(`Employee Objects List - ${this.employees[0]}`);
        console.log("Student Objects List - ".concat(this.student));
        console.log("User Objects List - ".concat(this.user));
    };
    return ObjectManagement;
}());
var Employee = /** @class */ (function () {
    function Employee(eid, ename) {
        this.eid = eid;
        this.ename = ename;
    }
    return Employee;
}());
var Student = /** @class */ (function () {
    function Student(sid, sname) {
        this.sid = sid;
        this.sname = sname;
    }
    return Student;
}());
var User = /** @class */ (function () {
    function User(uid, uname) {
        this.uid = uid;
        this.uname = uname;
    }
    return User;
}());
//Employee Array
var e1 = new Employee(101, "sukanta");
//let e2:Employee = new Employee(102,"manoj");
//let empArray:Employee[] = [e1,e2];
//empArray[0] = e1;
//empArray[1] = e2;
//Student Array
var std1 = new Student(201, "Amrita");
//let std2:Student = new Student(202,"Rajendra");
//let stdArray:Student[] = [std1,std2];
//stdArray[0] = std1;
//stdArray[1] = std2;
//User Array
var u1 = new User(301, "Prakash");
//let u2:User = new User(302,"Saroj");
//let userArray:User[] = [u1,u2];
//userArray[0] = u1;
//userArray[1] = u2;
var objects = new ObjectManagement(e1, std1, u1);
objects.Display();
