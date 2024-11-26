// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
          userfullname: {
             firstname: "ronit",
             lastname: "jacob"
          }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3= Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email: "h@google.com"
    }
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));




const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "ronit"
}
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) =>  {

// }
// navbar(company = "ronit")

// {
//     "name": "ronit",
//     "coursename": "JS in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]

