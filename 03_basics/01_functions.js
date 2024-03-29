
function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("N");
    console.log("I");
    console.log("T");
}

//sayMyName()

// function addTwoNumbers(nnumber1, number2){
//    console.log(number1 + number2);
// }

function addTwoNumbers(nnumber1, number2){


    // let result = number1 + number2
    // return result
    return number1 + number2
 }

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUserMessage(username ="sam"){
    if(!username){
    console.log("Please enter a username");
    return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ronit"));
console.log(loginUserMessage());



