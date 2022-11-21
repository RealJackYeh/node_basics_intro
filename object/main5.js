let product1 = {
    name: 'Book',
    price: 300
}
let someProduct1 = { ...product1 } // 5, 6 二行是等價的
let someProduct2 = { name: product1.name, price: product1.price }

console.log(`someProduct1: ${JSON.stringify(someProduct1)}`)
console.log(`someProduct2: ${JSON.stringify(someProduct2)}`)

let someProduct3 = { ...product1, price:30 }
console.log(`someProduct3: ${JSON.stringify(someProduct3)}`)

let { price, ...someProperties } = product1
console.log(`someProperties: ${JSON.stringify(someProperties)}`)