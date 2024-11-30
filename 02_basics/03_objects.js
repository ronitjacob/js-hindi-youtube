// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "ronit",
    "full name": "Ronit Jacob",
    [mySym]: "mykey1",
    age: 18,
    email: "ronit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "ronit@google.com"
// Object.freeze(jsUser)
jsUser.email = "ronit@apple.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} `);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());





