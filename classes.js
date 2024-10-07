var Student = /** @class */ (function () {
    function Student() {
        this.sId = 101;
        this.sName = "sukanta";
        this.isActive = true;
        this.total = 0;
        this.average = 0;
        this.marks = [35, 45, 36];
        this.courses = ["Corejava", "Adv. Java", "MicroService", "Spring", "Spring Boot", "Servlet", "JSP"];
        this.admissionDate = [23, "January", 2024];
    }
    Student.prototype.DisplayStudentDetails = function () {
        var studentDetails = "sid - ".concat(this.sId, "\nStudent Name - ").concat(this.sName, "\nActive - ").concat(this.isActive);
        console.log(studentDetails);
    };
    Student.prototype.DisplayResult = function () {
        for (var _i = 0, _a = this.marks; _i < _a.length; _i++) {
            var item = _a[_i];
            this.total += item;
        }
        console.log("Total Marks - " + this.total);
        this.average = this.total / this.marks.length;
        console.log("Average Marks - " + this.average);
    };
    return Student;
}());
var s1 = new Student();
s1.DisplayStudentDetails();
s1.DisplayResult();
