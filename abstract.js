var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(eId, eName, basicSalary) {
        this.eId = eId;
        this.eName = eName;
        this.basicSalary = basicSalary;
    }
    Employee.prototype.Display = function () {
        console.log("Id - ".concat(this.eId, "\nName - ").concat(this.eName, "\nBasicSalary - ").concat(this.basicSalary));
    };
    return Employee;
}());
var Trainner = /** @class */ (function (_super) {
    __extends(Trainner, _super);
    function Trainner(eId, eName, basicSalary, subject) {
        var _this = _super.call(this, eId, eName, basicSalary) || this;
        _this.subject = subject;
        return _this;
    }
    Trainner.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log("Subject - ".concat(this.subject));
    };
    Trainner.prototype.CalSalary = function (hours) {
        var salary;
        salary = this.basicSalary * hours + (this.basicSalary * hours) * 1.5 / 100.00;
        console.log("Trainner Salary is : ".concat(salary));
    };
    return Trainner;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.CalSalary = function (hours) {
        var salary;
        salary = this.basicSalary * hours + (this.basicSalary * hours) * 2.5 / 100.00;
        console.log("Admin Salary is : ".concat(salary));
    };
    return Admin;
}(Employee));
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HR.prototype.CalSalary = function (hours) {
        var salary;
        salary = this.basicSalary * hours + (this.basicSalary * hours) * 3.5 / 100.00;
        console.log("HR Salary is : ".concat(salary));
    };
    return HR;
}(Employee));
var faculty = new Trainner(101, "sukanta", 4000, "SpringBoot");
faculty.Display();
faculty.CalSalary(48);
console.log("*********************");
var admin = new Admin(102, "Manoj", 4000);
admin.Display();
admin.CalSalary(24);
console.log("*********************");
var hr = new HR(103, "Banalaxmi", 5000);
hr.Display();
hr.CalSalary(36);
