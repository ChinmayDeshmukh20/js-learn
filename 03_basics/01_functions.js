
function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")

}

//sayMyName   // this is reference of function
sayMyName()   // this is execution of function

function addTwoNos(n1 , n2){
    //console.log(n1 + n2);

    return n1+n2;

}

const result = addTwoNos(13,4);        // just like java storing the return value by the function & then printing it
console.log(result);

//example 2

function loginUserMessage(username = "sam")        // here defining username as sam works when user doesnt pass any value in function call, so we by default pass one value ,  in this case it is sam
{
    if(!username){   // checking if username is not present ,  and if not then we return from here only , just logged in will not be executed
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))









function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){   // passing array as argument to function
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
