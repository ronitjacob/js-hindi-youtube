// singleton
//object.create

// object literals

const mySym = Symbole("key1")


const JsUser = {
    name: "Ronit",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "ronit@googlecom",
    isLoggedIn: false,
    lastLoginDays: ["MONDAY", "SATURDAY"]
}
// console.log(JsUser);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "ronit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ronit@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting);
