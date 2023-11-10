// const tinderUser = new Object()    // singleton object
//const tinderUser = {}    // non-singleton object

//both above objects are same 

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   // if you do like this then obj2 will be added in obj1 , which will be assigned to obj3
// const obj3 = Object.assign({}, obj1, obj2, obj4)    // Object.assign(target , source)   // {} is used to define target , so concated objects will be added in {} one

const obj3 = {...obj1, ...obj2}    // using spread method to concat 2 objects
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // will add all the keys of Object in array 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));   // entries will give both key , value output 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // hasOwnProperty is used to check if parameter is present or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
