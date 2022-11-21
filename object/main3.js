let product1 = {
    name: 'Book',
    price: 300
}
let product2 = {
    name: 'Pen',
    price: '300'
}
let product3 = {
    productName: 'Pencil',
    price: '50'
}
product3.name = product3.productName  // 自動建立 name 屬性
delete product3.productName
product3.price = 40

// 宣告並建立函式 sumPrices
let sumPrices = (...numbers) => numbers.reduce((total, val) =>
    total + (Number.isNaN(Number(val)) ? 0 : Number(val)))
// 使用函式 sumPrices
let totalPrice = sumPrices(product1.price, product2.price, product3.price)
// 印出結果
console.log(`Total price is ${totalPrice} ${typeof totalPrice}`)
