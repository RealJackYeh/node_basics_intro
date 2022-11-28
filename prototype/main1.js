let book = {
    name: 'Book',
    price: 300,
    getTaxedPrice() {
        return Number(this.price) * 1.3
    }
}
console.log(`Book: ${book.price}, ${book.getTaxedPrice()}`)
console.log(`toString: ${book.toString()}`)