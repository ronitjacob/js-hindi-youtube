// Primitive 

// 7 types : string, Number, Boolearn, null, undefined, Symbol, 
//BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id === anotherId);

 const bigNumber = 34567890123456n


// Reference (Non primitve)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

 let myObj = {
    name: "ronit",
    age:24,
}

const myFunction = function(){
    console.log("Hello world");
    
}


console.log(typeof scoreValue);

// +++++++++++++++++++++++++++++++++++++

// Stack (Primitve), Heap (Non-Primitive)

let myYoutubename = "ronitjacobdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = user

userTwo.email = "ronit@google.com"

console.log(user.email);
console.log(userTwo.email);

