//CALL BY VALUE

let fname = "Harshit";

let nameAlias = fname;//COPY OF fname IS CREATED
console.log(nameAlias);
//changes made to this copy won't affect the original value
nameAlias = "Aman";
console.log(nameAlias);
console.log(fname);
console.log("++++++++++++++");

//CALL BY REFERENCE
let firstObj = {name : 'Harshit'};
console.log(firstObj.name);

let secondObj = firstObj;
secondObj.name = 'Aman';//changes mad through this reference will affect the original value
console.log(secondObj.name);