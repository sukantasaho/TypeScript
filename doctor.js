var Doctor = /** @class */ (function () {
    function Doctor() {
    }
    //setter method
    Doctor.prototype.setDocId = function (docId) {
        this.docId = docId;
    };
    Doctor.prototype.setDocName = function (docName) {
        this.docName = docName;
    };
    Doctor.prototype.setSpecialization = function (specialization) {
        this.specialization = specialization;
    };
    Doctor.prototype.setAddress = function (address) {
        this.address = address;
    };
    //getter method
    Doctor.prototype.getDocId = function () {
        return this.docId;
    };
    Doctor.prototype.getDocName = function () {
        return this.docName;
    };
    Doctor.prototype.getSpecialization = function () {
        return this.specialization;
    };
    Doctor.prototype.getAddress = function () {
        return this.address;
    };
    return Doctor;
}());
var d1 = new Doctor();
d1.setDocId(101);
d1.setDocName("Sukanta Sahoo");
d1.setSpecialization("Urology");
d1.setAddress("Bhubaneswara");
console.log("Id : ".concat(d1.getDocId(), "\nName : ").concat(d1.getDocName(), "\nSpecialization : ").concat(d1.getSpecialization(), "\nAddress : ").concat(d1.getAddress()));
