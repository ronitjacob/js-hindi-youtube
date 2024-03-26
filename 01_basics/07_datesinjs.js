// Dates

let myDate = new Date()
//console.log(myDate.toString());

// let myCreatedDate = new Date(2024, 0 ,23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("01-14-1014")
// console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})