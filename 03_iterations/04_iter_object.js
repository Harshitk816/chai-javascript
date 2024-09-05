const myObj ={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    py:"python"
}

//for-in loop for object
for (const key in myObj) {
    
    console.log(`${key} : ${myObj[key]}`);
    
}

//this will also work for arrays but insteads of keys it will print index
//this will not work for maps cuz map is not iterable