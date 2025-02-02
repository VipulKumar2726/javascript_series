
// Dates 

let myDate = new Date();
// console.log(myDate.toString()); // Fri Jan 31 2025 22:46:21 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  //Fri Jan 31 2025
// console.log(myDate.toLocaleDateString()); //1/31/2025
// console.log(typeof myDate);

// let myCreateData = new Date(2023, 0, 23);
// let myCreateData = new Date(2023, 0, 23, 5, 3);
let myCreateData = new Date("01-14-2023");

// console.log(myCreateData.toDateString()); //Mon Jan 23 2023
// console.log(myCreateData.toLocaleDateString());  // 1/23/2023

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateData.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time`)


newDate.toLocaleDateString('default', {
    weekday: "long"
})
