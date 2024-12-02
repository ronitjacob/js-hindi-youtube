
function sayName(){
   console.log("R");
   console.log("O");
   console.log("N");
   console.log("I");
   console.log("T");
   
}

// sayName()

// function addTwoNumber(num1, num2){
//    console.log(num1 + num2);
   
// }

function addTwoNumber(num1, num2){
   
   // let result = num1 + num2
   // return result
   return num1 + num2
   
   
   
}
const result= addTwoNumber(3,4)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
   if(username === undefined){
           console.log("Please enter a username");
             return
      
   }
   return `${username} just logged in`
}

// console.log(loginUserMessage("ronit"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
       return num1
}
// console.log(calculateCartPrice(200, 400, 500,2000))

const user = {
   username: "ronit",
   price: 199
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
// handleObject(user)
handleObject({
   username: "ben",
   price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
