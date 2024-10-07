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
    Trainner.prototype.DisplayTrainnerInfo = function () {
        console.log("Trainner Id : ".concat(this.eId, "\nName : ").concat(this.eName, "\nBasic Salary : ").concat(this.basicSalary, "\nSubject : ").concat(this.subject));
    };
    return Trainner;
}(Employee));
var faculty = new Trainner(101, "Sukanta", 20000, "Core Java");
faculty.DisplayTrainnerInfo();
