const coding=["js","cpp","c"]

coding.forEach( function (item){
    console.log(item);
    
})

// coding.forEach((items)=>{
//     console.log(items);
    
// })
//another way
// function printme(items){
//     console.log(items);
    
// }
// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
 //   console.log(item,index,arr);
    
})

const myCoding=[
    {
        lang:"js",
        langfile:"jsss"
    },
    {
        lang:"cppp",
        langfile:"cp"
    },
    {
        lang:"css",
        langfile:"cs"
    }
]
myCoding.forEach((item)=>{
    console.log(item.lang);
    
})