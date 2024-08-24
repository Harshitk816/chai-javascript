//scoping in nested function
function one(){
    const username = "Harshit"
    function two(){
        const channel = "Brawl Stars"
        //console.log(username);
        
    }
    //console.log(channel);//reference error
    two();
}

one();

//function declaration
//sayName("Harshit")   //supports hoisting

function sayName(name){
    console.log(`My name is ${name}`);
}

//function expression
//sayAge(21)//ReferenceError: Cannot access 'sayAge' before initialization
const sayAge = function(age){
    console.log(`My age is ${age}`);
}



