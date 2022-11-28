// 取得物件的原型物件
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
let penPrototype = Object.getPrototypeOf(pen)
console.log(`book prototype: ${bookPrototype}`)
console.log(`pen prototype: ${penPrototype}`)
console.log(`${bookPrototype === penPrototype}`)