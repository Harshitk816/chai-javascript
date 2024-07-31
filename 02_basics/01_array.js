//arrays in javascript
//arrays are used to store multiple values in a single variable

const myArr = [0,1,2,3,4,5]
const myHeroes = ['Shaktiman','Hanuman']

const objArr = new Array(4,3,6,5,6)
console.log(objArr[3]);

//pushing elements onto the array
objArr.push(9)
console.log(objArr);

//popping value out of the array
objArr.pop()
console.log(objArr);

//inserting value into the start of array
objArr.unshift(9)
console.log(objArr);

//popping value from the start of the array
objArr.shift()
console.log(objArr);

//finding a value inside an array
console.log(objArr.includes(4));
 
//finding the index of the element
console.log(objArr.indexOf(6));

//slicing an array
let sliceArr = objArr.slice(0,2)//will create a shallow copy
console.log(sliceArr);

//splicing an array
let spliceArr = objArr.splice(0,3)//will change the original array
console.log(spliceArr);
console.log(objArr);




