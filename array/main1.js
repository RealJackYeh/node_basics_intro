let names = ['book', 'pen', 'notes']
let prices = []
prices.push(300)
prices.push('300')
prices.push(20.5)
console.log(`First product: ${names[0]}: ${prices[0]}`)
/*
let sumPrices = (...paras) => paras.reduce((total, val) =>
    total + (Number.isNaN(Number(val)) ? 0 : Number(val))
)
*/  
let totalPrice = sumPrices(...prices)
console.log(`Total price: ${totalPrice} ${typeof totalPrice}`)


let sumPrices = function(...paras){ 
        return paras.reduce( function(total, val){
                return total + (Number.isNaN(Number(val)) ? 0 : Number(val))
            }
        )
}

