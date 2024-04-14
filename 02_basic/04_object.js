// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "rohit", 
            lastname : "mahato"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'c' , 4 : 'd'}

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
   {
    email : "@gmail.com",
    id : "123"
   },
   {
    email : "@gmail2.com",
    id : "123"
   }
]

// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course
console.log(instructor)

// JSON

// {
//     "name " : "rohit",
//     "cousename" : "js in hindi",
//     "price" : "free"
// }

