console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

//symbol usage
const id = Symbol(10);
const anotherId = Symbol(10);

console.log("result is " + (id==anotherId));

//array
const heroes = [shaktiman, hanuman, naagraj];

//object
const myObj ={
    name: "Harshit",
    age: 22
};

//functions
const myFunction = function(){
    console.log("Hello JS.");
    
} 