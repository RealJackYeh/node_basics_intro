let product1 = {
    name: 'Book',
    price: 300
}
let product2 = {
    name: 'Pen',
    price: '300'
}
// 宣告並建立函式 sumPrices
let sumPrices = (...numbers) => numbers.reduce((total, val) =>
    total + (Number.isNaN(Number(val)) ? 0 : Number(val)))
// 使用函式 sumPrices
let totalPrice = sumPrices(product1.price, product2.price)
// 印出結果
console.log(`Total price is ${totalPrice} ${typeof totalPrice}`)