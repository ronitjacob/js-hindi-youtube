function syaMyName(){
   console.log("R");
   console.log("O");
   console.log("N");
   console.log("I");
   console.log("T");
   
}

// syaMyName()

// function addTwoNumbers(number1, number2){
//       console.log(number1 + number2);
      
// }
function addTwoNumbers(number1, number2){
   
   // let result = number1 + number2
   // return result
   return number1 + number2
}

const result  = addTwoNumbers(3,4)

// console.log("Result: ", result);

function loginUserMessage (username ){
   if(!username){
         console.log("Please enter a username");
         return
   }
   return `${username} just logged in`
}

// console.log (loginUserMessage("ronit"))
// console.log(loginUserMessage("ronit"));

function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log (calculateCartPrice(200,400,500, 2000))

const user = {
   username:"ronit",
   price: 199
}

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     
}

// handleObject(user)

handleObject({
   username: "simran",
   price: 399
})

const myNewArray = [200, 400, 600, 100]

function returnSecoundValue(getArray){
   return myNewArray[1]
}

console.log(returnSecoundValue(myNewArray));

