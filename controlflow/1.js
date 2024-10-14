// if 
const isUserLog=true
const temperature=41

// if(temperature<50)
// {
//     console.log("less than 50");
    
// }
// if (!isUserLog){
//     console.log("no");
    
// }
// else{
//     console.log("yes");
    
// }

// const score=200
// if(score>100)
// {
//     const power="fly"
//     console.log(`user power ${power}`);
    
// }

// console.log(`user power ${power}`);   it will give error as const keyword is used with power make it accessibke only in that scope

const balance =1000
if(balance>500) console.log("test"),console.log("test2"); //inplicite call bad syntax
//switch 
switch (balance) {
    case 10:console.log("no");
    
        
        break;
    case 1000:console.log("yes");
        break;    //withou break matching conditon ke nicche ka sara code execute kare ka except default
    default:console.log("jooj");
    
        break;
}