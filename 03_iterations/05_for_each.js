const coding=['js', 'ruby', 'java', 'python', 'cpp'  ]
coding.forEach(function(val){
    console.log(val)
})

coding.forEach((val, index, arr)=>{
    console.log(val, index, arr);
    
})

const codingLang = [
    {
        name:'javascript',
        type:'js'
    },
    {
        name:'java',
        type:'java'
    },
    {
        name:'python',
        type:'py'
    }
]

codingLang.forEach((lang)=>{
    console.log(lang.type);
    
})
