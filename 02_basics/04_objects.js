// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id= "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "ronit",
            lastname: "jacob"
        }
    }
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = {
//     {
//         id: 1,
//         email; "r@gmail.com"
//     },
//     {
//         id: 1,
//         email; "r@gmail.com"
//     },
//     {
//         id: 1,
//         email; "r@gmail.com"
//     },
// }



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ronit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

 console.log(instructor);

//  {
//   "  name": "ronit",
//     "coursename": "js in hindi",
//     "price":"free"
//  }

[
    {},
    {},
    {}
]