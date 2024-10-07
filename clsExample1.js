var Employee = /** @class */ (function () {
    //last is default parameter which is initialized if user is not provided this will be taken
    function Employee(eId, eName, eSal, eAddr, gender) {
        if (gender === void 0) { gender = "Male"; }
        this.eId = eId;
        this.eName = eName;
        this.eSal = eSal;
        this.eAddr = eAddr;
        this.gender = gender;
    }
    Employee.prototype.DisplayEmployeeDetails = function () {
        var details = "EID - ".concat(this.eId, "\nENAME - ").concat(this.eName, "\nESAL - ").concat(this.eSal, "\nEADDR - ").concat(this.eAddr, "\nGENDER - ").concat(this.gender);
        console.log(details);
    };
    return Employee;
}());
var e3 = new Employee(101, "Sukanta Sahoo", 10000, "Bhadrak");
e3.DisplayEmployeeDetails();
console.log("*****************************");
var e4 = new Employee(101, "Banalaxmi Sahoo", 10000, "Bhadrak", "Female");
e4.DisplayEmployeeDetails();
