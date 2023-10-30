
let score = "33"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//Notes  when we convert other datatypes to number
// "33" => 33
// "33abc" => NaN (Not a number)
// true => 1 ; false =>0




let isLoggedin = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedin)

// console.log(booleanIsLoggedIn);

//  Notes - when we convert other datatypes to boolean
//  1=> true , 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33
let stringSomeNumber = String(someNumber)

// console.log(stringSomeNumber);
// console.log(typeof stringSomeNumber);


// *******************OPERATIONS*****************

let value = 3
let negativeValue = -value;

// console.log(negativeValue);

let str1 = "hello"
let str2 = " Chinmay"
console.log(str1 + str2);

console.log("12" + "4");

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);    // the datatype of first element will be consider for rest of the elements
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);   // we dont use this in prod level app
// console.log(+"");