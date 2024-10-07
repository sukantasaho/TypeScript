var Customer = /** @class */ (function () {
    function Customer() {
    }
    //method
    Customer.prototype.CustomerInfo = function () {
        this.customerId = 101;
        this.customerName = "Sukanta Sahoo";
        this.customerBalance = 20000;
    };
    //function
    Customer.prototype.Display = function () {
        var details = "Name - ".concat(this.customerName, "\nId - ").concat(this.customerId, "\nBalance - ").concat(this.customerBalance);
        return details;
    };
    //function
    Customer.prototype.GetTotalProductPrice = function (prodPrice, qty) {
        var totalPrice = prodPrice * qty;
        return "The Total Product Price is - ".concat(totalPrice);
    };
    return Customer;
}());
var customer = new Customer();
customer.CustomerInfo();
var custDetails = customer.Display();
console.log(custDetails);
console.log(customer.GetTotalProductPrice(8000, 10));
