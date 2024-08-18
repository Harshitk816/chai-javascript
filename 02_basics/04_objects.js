const TinderUser = new Object()   //singleton object
// console.log(TinderUser);

const TinderUser1 = {}    //object literal
TinderUser1.id = "123abc"
TinderUser1.name = "Harshit"
TinderUser1.isLoggedIn = true
// console.log(TinderUser1);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullname:{
            firstName:"Harshit",
            lastName:"Sharma"
        }
    }

}
// console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//merging arrays
const mergedObj = Object.assign({},obj1,obj2)
// console.log(mergedObj);
mergedObj["1"]="ab"
// console.log(mergedObj);
// console.log(obj1);


//merging using spread operators
const mergedObj2 = {...obj1,...obj2}
// console.log(mergedObj2);


const users = [
    {
        id:1,
        email:'h@gmail.com',
    },
    {
        id:1,
        email:'h@gmail.com',
    },
    {
        id:1,
        email:'h@gmail.com',
    },
    {
        id:1,
        email:'h@gmail.com',
    }
]

// console.log(users[1]);

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:'hitesh'
}

const {coursename, price, courseInstructor} = course;
console.log(price);

