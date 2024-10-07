var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.GetFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.GetAge = function () {
        return this.age;
    };
    return Person;
}());
var e1 = new Person("Sukanta", "Sahoo", 29);
console.log("Fullname : " + e1.GetFullName());
console.log("Age : " + e1.GetAge());
