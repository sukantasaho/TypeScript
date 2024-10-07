class Laptop
{
    modelId:number;
    laptopName:string;
    price:number;
    modelYear:[number,string,number];
    ram:string;
    rom:string;
    description?:string;
    processor:string;
    //? mark is optional parameter
    constructor(modelId:number,laptopName:string,price:number,
      modelYear:[number,string,number],ram:string,rom:string,processor:string, description?:string)
    {
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
    DisplayLaptopInfo():void
    {
        let details = `Model Id : ${this.modelId}\nLaptop Name : ${this.laptopName}\nPrice : ${this.price}\nModel Year : ${this.modelYear}\nRam : ${this.ram}\nRom : ${this.rom}\nProcessor : ${this.processor}\nDescription : ${this.description}`;
        console.log(details);
    }
}
var hp:Laptop = new Laptop(10001,"HP Pavillion 12", 54000,[12,"April",2022],"12GB RAM","500GB ROM","Intel Core i5");
hp.DisplayLaptopInfo();
console.log("====================================");
var dell:Laptop = new Laptop(10002,"Dell Inspiron 15", 44000,[23,"June",2020],"16GB RAM","1TB ROM","Intel Core i5","This Laptop having advance feature");
dell.DisplayLaptopInfo();