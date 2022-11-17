// 給輸入參數預設值
let bookPrice = 300
console.log(`book price is ${bookPrice}`)
let penPrice = "300"
console.log(`pen price is ${penPrice}`)

function sumPrices(first, second, third=0) {
    return first + second + third
}
let totalPrice = sumPrices(bookPrice, penPrice)
console.log(`Total price is ${totalPrice}, ${typeof totalPrice}`)
totalPrice = sumPrices(300, 300, 100)
console.log(`Total price is ${totalPrice}, ${typeof totalPrice}`)
totalPrice = sumPrices(300, 300)
console.log(`Total price is ${totalPrice}, ${typeof totalPrice}`)