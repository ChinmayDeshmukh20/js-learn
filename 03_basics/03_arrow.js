const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);   // this will contain context of user object scope
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);      // output will be {} in node & while running it on browser it won't be empty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);      // output - undefined , bcoz this.xyz only works in objects not functions
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);      // output - undefined , bcoz this.xyz only works in objects not functions
// }

const chai =  () => {                   // ARROW FUNCTION WAY OF DECLARING FUNCTION
    let username = "hitesh"             // const chai = function(){}  ....this is normal function ....just remove function word & add arrow
    console.log(this);                  // const chai = () => {}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                  
// }

// const addTwo = (num1, num2) =>  num1 + num2      // in ARROW FUNCTION when we remove {} no need to add return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )   // this is also same as above

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()