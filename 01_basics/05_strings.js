const name = "ronit"
const repoCount = 50

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ronit-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString= gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne= "  ronit  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ronit.com/ronit%20jacob"

console.log(url.replace('%20','-'));

console.log(url.includes('ronit'));

console.log(gameName.split('-'));












