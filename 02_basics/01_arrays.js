// arrays in js are resizeable

const myArr = [0,1,2,3,4,5]
console.log(myArr);

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[4]);

//Array methods

myArr.push(8)
myArr.push(10)
console.log(myArr);

myArr.pop()   // will pop the last element 
console.log(myArr);

myArr.unshift(12)     // unshift will add element at the start by moving all the elements to the right
console.log(myArr);

myArr.shift()
console.log(myArr);   // shift will remove the first element and shift all the elements to the left 


console.log(myArr.includes(9));   // will return output as boolean

// console.log(myArr.indexOf(3));  // will return index if present else -1

// const newArr = myArr.join()   // will join all elements of array & return in form of String


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   // slice will not include the upper limit & most imp thing is the original array will remain unchanged

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   //splice will include the upper limit but most importantly change the original array permanently by deleting the splice part from it
console.log("C ", myArr);
console.log(myn2);