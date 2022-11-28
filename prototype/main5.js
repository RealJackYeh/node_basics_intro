function Product (name, price) {
    this.name = name
    this.price = price
    this.toString = function() {
        return `toString: Name: ${this.name}, Price: ${this.price}`
    }
}
function ProductPlusTax (name, price, taxRate) {
    Product.call(this, name, price)
    this.taxRate = taxRate
    this.price = price
    this.getPricewithTax = function() {
        return Number(this.price) * this.taxRate
    }
    this.toString1 = function() {
        return `${this.toString()}, Tax: ${this.getPricewithTax()}`
    }
}
let book = new Product('Book', 100)
let pen = new ProductPlusTax('pen', 200, 1.2)
console.log(book.toString())
console.log(pen.toString1())
console.log(`${Object.getPrototypeOf(book)}, ${Object.getPrototypeOf(pen)}`)