let product1 = {
    name: 'Book',
    _price: 300,
    taxedPrice: 300 * 1.3,
    set price(newPrice) {
        this._price = newPrice
        this.taxedPrice = this._price * 1.3
    },
    get price() {
        return this._price
    }
}
let product2 = {
    name: 'Pen',
    price: '300',
    get taxedPrice() {
        return Number(this.price) * 1.3
    }
}

console.log(`Product1: ${product1.price}, ${product1.taxedPrice}`)
product1.price = 400
console.log(`Product1: ${product1.price}, ${product1.taxedPrice}`)

console.log(`Product2: ${product2.price}, ${product2.taxedPrice}`)
product2.price = '200'
console.log(`Product2: ${product2.price}, ${product2.taxedPrice}`)