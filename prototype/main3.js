// 覆寫共同的原型物件的方法
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
let bookPrototype = Object.getPrototypeOf(book)
bookPrototype.toString = function() {
    return `toString: name: ${this.name}, price: ${this.price}`
}
console.log(`${book.toString()}`)
console.log(`${pen.toString()}`)