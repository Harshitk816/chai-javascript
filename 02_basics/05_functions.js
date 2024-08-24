//function definition
function sayaName(name){
    // console.log(`My name is ${name}`);
}
// function call
sayaName("Harshit")

//return keyword
function sum(a,b){
    let sum = a+b;
   // console.log(sum); 
    return sum;
} 

//passing no arguments
function loginUserMessage(username){
    if(username===undefined){
        // console.log(`Please enter the username`);
        return
    }
    // console.log(`${username} just logged in!`);
    
}

loginUserMessage()//no parameters passed

//rest operator
function sumAll(...nums){
    let sum = 0;
    for(let num of nums){
        sum+=num
    }
    // console.log(sum);
    return sum;
}
// function call
const sumOfNums = sumAll(1,2,3,4,5,6,7,8,9,10)
// console.log(sumOfNums);


//functions with objects
const user={
    name:'Harshit',
    rollNo:1265
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.name} and roll Number is ${anyObj.rollNo}`);
    
}

handleObject(user)