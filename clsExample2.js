var Laptop = /** @class */ (function () {
    function Laptop(modelId, laptopName, price, modelYear, ram, rom, processor, description) {
        this.modelId = modelId;
        this.laptopName = laptopName;
        this.price = price;
        this.modelYear = modelYear;
        this.ram = ram;
        this.rom = rom;
        this.processor = processor;
        this.description = description;
    }
    //method
    Laptop.prototype.DisplayLaptopInfo = function () {
        var details = "Model Id : ".concat(this.modelId, "\nLaptop Name : ").concat(this.laptopName, "\nPrice : ").concat(this.price, "\nModel Year : ").concat(this.modelYear, "\nRam : ").concat(this.ram, "\nRom : ").concat(this.rom, "\nProcessor : ").concat(this.processor, "\nDescription : ").concat(this.description);
        console.log(details);
    };
    return Laptop;
}());
var hp = new Laptop(10001, "HP Pavillion 12", 54000, [12, "April", 2022], "12GB RAM", "500GB ROM", "Intel Core i5");
hp.DisplayLaptopInfo();
console.log("====================================");
var dell = new Laptop(10002, "Dell Inspiron 15", 44000, [23, "June", 2020], "16GB RAM", "1TB ROM", "Intel Core i5", "This Laptop having advance feature");
dell.DisplayLaptopInfo();
