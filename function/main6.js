let bookPrice = 300
console.log(`book price is ${bookPrice}`)
let penPrice = "300"
console.log(`pen price is ${penPrice}`)

function sumPrices(...numbers) {
    return numbers.reduce(
        (total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val))
    )
}
let totalPrice = sumPrices(bookPrice, penPrice)
console.log(`Total price is ${totalPrice}, ${typeof totalPrice}`)
totalPrice = sumPrices(300, 300, 100)
console.log(`Total price is ${totalPrice}, ${typeof totalPrice}`)
totalPrice = sumPrices(300, 300)
console.log(`Total price is ${totalPrice}, ${typeof totalPrice}`)