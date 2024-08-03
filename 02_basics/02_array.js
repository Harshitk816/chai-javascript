  const marvel_heroes = ["thor","Ironman","spiderman"]
  const dc_heroes = ["superman","flash","batman"]

//concatenation of arrays
  const allHeroes = marvel_heroes.concat(dc_heroes)
  console.log(allHeroes);
  
 //using spread operator
 const allHeroes2 = [...marvel_heroes, ...dc_heroes]
 console.log(allHeroes2);
 
 let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

let copy = [...arr1];
console.log(copy); // Output: [1, 2, 3]

arr1[2]=7
console.log(arr1); 
console.log(copy);

//flat 
let another_array = [1,2,3,[5,6,7],8,9,[1,2,[3,4,5]]]
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//Array Methods

//isArray
console.log(Array.isArray(another_array));

//from
let myStr = 'Hello There'
console.log(Array.from(myStr));

//of

let var1 = 1
let var2 = 2
let var3 = 3

console.log(Array.of(var1,var2,var3));


