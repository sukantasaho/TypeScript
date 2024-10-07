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
var Category = /** @class */ (function () {
    function Category(categoryId, categoryName) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        categoryId;
    }
    return Category;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(categoryId, categoryName, prodId, prodName, unitPrice, productDescription) {
        var _this = _super.call(this, categoryId, categoryName) || this;
        _this.prodId = prodId;
        _this.prodName = prodName;
        _this.unitPrice = unitPrice;
        _this.productDescription = productDescription;
        return _this;
    }
    return Product;
}(Category));
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Laptop.prototype.CalculateTotalPrice = function (qty) {
        this.totalPrice = this.unitPrice * qty;
    };
    Laptop.prototype.Display = function () {
        console.log("Category Id : ".concat(this.categoryId, "\nCategory Name : ").concat(this.categoryName, "\nProduct Id : ").concat(this.prodId, "\nProduct Name : ").concat(this.prodName, "\nTotal Product Price : ").concat(this.totalPrice, "\nProduct Description : ").concat(this.productDescription));
    };
    return Laptop;
}(Product));
var HP = new Laptop(1001, "Electronics", 3001, "HP Pavilion 14", 55000);
HP.CalculateTotalPrice(3);
HP.Display();
console.log("*******************************");
var DELL = new Laptop(1002, "Electronics", 3002, "Dell Inspiron 14", 45000, "This product comes with lates feature and pre-installed MS Office");
DELL.CalculateTotalPrice(2);
DELL.Display();
