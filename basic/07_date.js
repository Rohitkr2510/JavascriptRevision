// Dates 

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

// let myCreateDate = new Date(2024, 0 , 23)
// let myCreateDate = new Date(2024, 0 , 23, 5, 3)
let myCreatedDate = new Date("01-14-2024")

// console.log(myCreateDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDate());

newDate.toLocaleDateString('default', {
    weekday: "long"
})