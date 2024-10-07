var StudentInfo = /** @class */ (function () {
    function StudentInfo(id, name) {
        this.id = id;
        this.name = name;
    }
    StudentInfo.prototype.Display = function () {
        console.log("Id is : ".concat(this.id, " and Name is ").concat(this.name));
    };
    return StudentInfo;
}());
var s1 = new StudentInfo(101, "Sukanta");
s1.Display();
