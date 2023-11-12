
/// FUNCTION & SCOPE ALMOST JAVA JAISE HE HAI

//var c = 300
let a = 300
if (true) 
{
    let a = 10
    const b = 20
    var c= 30                        // NEVER USE VAR BCOZ => var can be accessed outside its defined scope as well , 
                                     //like here even if var c is within if block , then also it can accessed outside of it , so it can be confused with global var declared
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))     // addone will be executed even if we write it before function declaration code

function addone(num){      // WAY 1 of WRITING FUNCTION
    return num + 1
}



addTwo(5)     // this wont work , bcoz we are holding function in a var and , that var is intialised later on , and we are trying to access it before 
const addTwo = function(num){     // WAY 2 of WRITING FUNCTION
    return num + 2
}