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
console.log(`${Object.getPrototypeOf(ProductPlusTax) === Object.getPrototypeOf(Product)}`)
Object.setPrototypeOf(ProductPlusTax.prototype, Product.prototype)
console.log(`${Object.getPrototypeOf(ProductPlusTax) === Object.getPrototypeOf(Product)}`)
console.log(`${Object.getPrototypeOf(ProductPlusTax) === Product}`)
console.log(`${Product.isPrototypeOf(ProductPlusTax)}`)

