// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
    
// }

// for (let i = 0; i <=10; i++) {
//     console.log(`i value: ${i}`);
    
//     for (let j = 0; j <=2; j++) {
//         console.log(`j value: ${j}`);  
        
//     }
    
// }
let myArray=["shivam","udhav","Arun"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
    
}

// break and continue 
for (let index = 0; index <=20; index++) {
    console.log(`value of i is :${index}`);
    if(index===5)
    {
        break
    }
    
    
}
for (let index = 0; index <=20; index++) {
    if(index===5)
        {
            continue
        }
    console.log(`value of i is :${index}`);
      
}
