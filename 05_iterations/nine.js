const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc:${acc} and curravl:${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "py course",
        price: 599
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay);
