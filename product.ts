class Category
{
    categoryId:number;
    categoryName:string;
    constructor(categoryId:number,categoryName:string)
    {
        this.categoryId = categoryId;
        this.categoryName = categoryName;categoryId;
    }
}


abstract class Product extends Category
{
    prodId:number;
    prodName:string;
    unitPrice:number;
    productDescription?:string;
    constructor(categoryId:number,categoryName:string, prodId:number,prodName:string,unitPrice:number,productDescription?:string)
    {
        super(categoryId,categoryName);
        this.prodId = prodId;
        this.prodName = prodName;
        this.unitPrice = unitPrice;
        this.productDescription = productDescription;
    }
    //function
    abstract CalculateTotalPrice(qty:number);
    
}
class Laptop extends Product
{
     totalPrice:number;
      CalculateTotalPrice(qty: number) {
         this.totalPrice = this.unitPrice*qty;
      }
      Display()
      {
            console.log(`Category Id : ${this.categoryId}\nCategory Name : ${this.categoryName}\nProduct Id : ${this.prodId}\nProduct Name : ${this.prodName}\nTotal Product Price : ${this.totalPrice}\nProduct Description : ${this.productDescription}`)
      }
}

var HP : Laptop = new Laptop(1001,"Electronics", 3001,"HP Pavilion 14",55000);
HP.CalculateTotalPrice(3);
HP.Display();
console.log("*******************************");
var DELL : Laptop = new Laptop(1002,"Electronics", 3002,"Dell Inspiron 14",45000,"This product comes with lates feature and pre-installed MS Office");
DELL.CalculateTotalPrice(2);
DELL.Display();

