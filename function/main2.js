// 探究一下 函式回傳值的型別，它是由輸入參數所決定
let bookPrice = 300
console.log(`book price is ${bookPrice}`)
let penPrice = "300"
console.log(`pen price is ${penPrice}`)

function sumPrices(first, second, third) {
    return first + second + third
}
let totalPrice = sumPrices(bookPrice, penPrice)
console.log(`Total price is ${totalPrice}, ${typeof totalPrice}`)
totalPrice = sumPrices(300, 300, 100)
console.log(`Total price is ${totalPrice}, ${typeof totalPrice}`)
totalPrice = sumPrices(300, 300)
console.log(`Total price is ${totalPrice}, ${typeof totalPrice}`)