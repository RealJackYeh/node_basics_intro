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
    },
    
    showDetails() {
        console.log(`${this.name}: ${this.price}, ${this.taxedPrice}`)
    }

}
let product2 = {
    name: 'Pen',
    price: '300',
    get taxedPrice() {
        return Number(this.price) * 1.3
    }
}
product1.showDetails()
product1.price = 200
product1.showDetails()

/*
    showDetails: function() {
        console.log(`${this.name}: ${this.price}, ${this.taxedPrice}`)
    }
*/

