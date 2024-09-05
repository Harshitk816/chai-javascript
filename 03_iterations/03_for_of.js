//for-of loop

const arr =[1,2,3,4,5]
for(const i of arr){
    // console.log(i);
    
}

const str = "Hello World"

for(const char of str){
    // console.log(char);
    
}

//MAPS
const map = new Map()
map.set('in','India')
map.set('us','United States')
map.set('fr','France')

//console.log(map);

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
    
}
