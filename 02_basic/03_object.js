// singleton

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "Hitesh",
    [mySym] : mySym,
    "full name" : "Rohit Kumar",
    age : 18,
    location : "Dhanbad",
    email : "rohit@gamil.com", 
    isLOggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "rohit@dj.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello Js user")
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`)
}

// console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
