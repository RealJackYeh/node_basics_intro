let bookPrice = 300
console.log(`book price is ${bookPrice}`)
let penPrice = "300"
console.log(`pen price is ${penPrice}`)

if (bookPrice === penPrice) {
    console.log('Prices are the same!')
} else {
    console.log('Prices are different!')
}
let totalPrice = Number(bookPrice) + Number(penPrice)
console.log(`Total price is ${totalPrice}`)