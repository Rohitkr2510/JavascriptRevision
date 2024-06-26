// Primitive 

// 7 types : String , Number , Boolean , null , undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//Reference (Non primitive)

// Array, Object , Function

const heros = ["rohit", "rahul", "mohit"]
let myObj = {
    name : "Rohit",
    age : 22,
}

const myFunction = function() {
    console.log("Hello world");
}


// Stack (Primitive) , Head(Non-Primivie)

// let myYoutubeNme = "hiteshchoudarydotcom"

// let anothername = myYoutubeNme
// anothername = "rohit"
// console.log(myYoutubeNme)
// console.log(anothername)

let userOne = {
    email : "rohit@gmail.com",
    age : 22,
}

let userTwo = userOne;
userTwo.email = "rohit"
console.log(userOne.email)
console.log(userTwo.email)
