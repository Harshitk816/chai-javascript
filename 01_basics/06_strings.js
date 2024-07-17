let gitUsername = "HarshitK816";
let repoCount = 32;
//depreciated
console.log("My Github username is "+gitUsername+" and my repo count is "+repoCount);

//newer-syntax (backticks)
console.log(`My Github username is ${gitUsername} and my repo count is ${repoCount}`);


//Strings as objects
let strObj = new String("Hello World");
//different methods
console.log(strObj[4]);
console.log(strObj.length);
console.log(strObj.charAt(6));
console.log(strObj.toUpperCase());
console.log(strObj.indexOf('r'));
console.log(strObj.toLocaleLowerCase());
strObj[4]='e';
console.log(strObj);

let arr = [2,4,5,2,5,3];
arr[3]=5;
console.log(arr);





