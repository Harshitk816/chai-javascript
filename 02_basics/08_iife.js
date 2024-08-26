(function chai(){            //function definition
    console.log("ChaiCode");
    
})();//fucntion call OR INVOKE //SEMI-COLON mandatory to end the execution context

(()=>{
    console.log("ChaiArrow");
    
})();

((name)=>{                  //passing params
    console.log(`Welcome, ${name}`);
    
})('Harshit');              //passing arguments