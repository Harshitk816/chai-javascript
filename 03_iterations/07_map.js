const numbers = [1,2,3,4,5,6]
const newNums = numbers.map((num)=>num+10)
console.log(newNums);


//chaining


const nums = [1,2,3,4,5,6]
const addNums = nums
                    .map((num)=>num+10)
                    .filter((num)=>num>15)

console.log(addNums);
