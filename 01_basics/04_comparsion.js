console.log("hello")
console.log("2">1);
console.log("02">1);
console.log("01">1);

// this kind of comparsion should be avoided , as output cant be predicated always correctly
// == works fine if both datatypes are same , and if both datatypes are different as in below examples , then it creates an issue
// == converts null into 0 , while for <= , >= it won't be converted that way ,  so avoid using such bad ways of coding

// use === for strict checking , === will check if both datatypes are same and then only it will proceed further

console.log(null==0);
console.log(null>=0);
console.log(null>0);


console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined>0);

// in JS == (equality) and > , < , <= , >= (comparators) both work differently