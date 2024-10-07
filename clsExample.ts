class Customer
{
    customerId:number;
    customerName:string;
    customerBalance:number;
    //method
   public CustomerInfo():void
   {
       this.customerId = 101;
       this.customerName = "Sukanta Sahoo";
       this.customerBalance = 20000;
   }
   //function
   public Display():string
   {
       let details:string = `Name - ${this.customerName}\nId - ${this.customerId}\nBalance - ${this.customerBalance}`;
       return details;
   }
   //function
   GetTotalProductPrice(prodPrice:number,qty:number):string
   {
       let totalPrice:number = prodPrice*qty;
       return `The Total Product Price is - ${totalPrice}`;
   }
   
}
let customer:Customer = new Customer();
customer.CustomerInfo();
let custDetails:string = customer.Display();
console.log(custDetails);
console.log(customer.GetTotalProductPrice(8000,10));