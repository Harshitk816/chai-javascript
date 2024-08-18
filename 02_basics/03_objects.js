//singleton
//Object.create

//object literals
const mysym = Symbol("key1")
const jsUser = {
    name:'Harshit',
    age:21,
    [mysym]:'HarshitK',
    location:"Chandigarh",
    email:"harshit@gmail.com",
    isLoggedIn:true

}

//accessing objects

console.log(jsUser.name);
console.log(jsUser['name']);
console.log(jsUser[mysym]);
jsUser.name='Harshit Sharma'
//Object.freeze(jsUser)
jsUser.name="Harshit Kaushal"
console.log(jsUser);

//creating functions inside object

jsUser.greetings = function(){
    console.log(`Hello there ${this.name}`);    
}

jsUser.greetings()





