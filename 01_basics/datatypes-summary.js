// Primitive 

// 7 types : string, Number, Boolearn, null, undefined, Symbol, 
//BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34565476767657n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
 let myObj = {
    name: "ronit",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);