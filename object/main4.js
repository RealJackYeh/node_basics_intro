let product1 = {
    name: 'Book',
    price: 300
}
let propertyCheck1 = product1.productName || ""
let propertyCheck2 = product1.price || 0
console.log(`Checks: ${propertyCheck1}, ${propertyCheck2}`)
