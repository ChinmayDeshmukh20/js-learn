//DATES

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// Typeof Date is OBJECT
// starting date is 1st jan 1970 , milliseconds are counted from this date onwards , that's why in whatsapp status i saw 1970 status date


// let myCreatedDate = new Date(2023 , 0 , 23)
// console.log(myCreatedDate);


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);



// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());     // to get time in millisecs
// console.log(Math.floor(Date.now()/1000));   // to get time in secs

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

