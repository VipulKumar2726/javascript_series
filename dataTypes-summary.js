//  Primitive 

// 7 types : String,Number,Boolean,null,undefined ,symbol,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 22454523123243n

//   Reference (Non Primitive)

//  Array, Objects, Functions


const heros = ["vipul", "kumar", "kewat"];

let myObj = {
    name: "Vipul",
    age: "21"
}

const myFuncton = function() {
    console.log("Hello");
}

// console.log(typeof myFuncton)
// console.log(typeof anotherId)
// console.log(typeof myObj)
// console.log(typeof scoreValue)
// console.log(typeof isLoggedin)
// console.log(typeof outsideTemp)





//   ********************************


//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "vipulkumar.com"

let anothername = myYoutubename
anothername = "kewat"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vipul@google.com"
console.log(userOne.email)
console.log(userTwo.email)

