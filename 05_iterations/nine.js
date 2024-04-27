const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc:${acc} and curravl:${currval}`);
    return acc + curral
}, 0)

console.log(myTotal);