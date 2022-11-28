// 自訂原型物件
let productPrototype = {
    toString: function() {
        return `toString: name: ${this.name}, price: ${this.price}`
    }
}
let book = {
    name: 'Book',
    price: 300,
    getTaxedPrice() {
        return Number(this.price) * 1.3
    }
}
let pen = {
    name: 'Pen',
    price: 100,
    getTaxedPrice() {
        return Number(this.price) * 1.3
    }
}
Object.setPrototypeOf(book, productPrototype)
Object.setPrototypeOf(pen, productPrototype)
console.log(`${book.toString()}`)
console.log(`${pen.toString()}`)