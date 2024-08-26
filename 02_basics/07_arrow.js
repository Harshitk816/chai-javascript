const user={
    name:'Harshit',
    rollNo:1265,

    welcomeMessage:function(){
        // console.log(`Welcome, ${this.name}`);
        //console.log(this);
        
    }
}
user.welcomeMessage()
//console.log(this);

//function declaration
function chai(){
    let username = "Harshit"
    //console.log(this.username);//this syntax only valid for object methods
}
chai()

//function expression
const chai1 = function(){
    // console.log(this);
    
}
chai1()

//arrow function
const chai2 = ()=>{
     console.log(this);
    
}
chai2()


const addtwo = (num1, num2) => num1+num2  //single line expression can remove return keyword and curly braces 