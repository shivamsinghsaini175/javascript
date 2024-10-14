const user={
    username:"shivam",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`) //point inside the scope
        console.log(this); // tells about context
    }
}
user.welcomeMessage()
user.username="sham"
user.welcomeMessage()


// console.log(this); this is empty object as it is out of context 
// global is window if we check in browser console

// function chai (){
//     console.log(this)
// }
// chai()

// const chai=function(){  // op is undefined
//     let username="shivam"
//     console.log(this.username);
    
// }

// arrow function 
const chai=()=>{             
    let username="shivam"
    console.log(this.username);
    
}
// chai()

//basic structure 
// ()=> // basic arrow functionn curely braces
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(4,5)) 

// implicit return function we can use (num1+num2)

const addTwwwo=(num1,num2)=>num1+num2
console.log(addTwwwo(3,4))

const addTwwo=(num1,num2)=>({username:"shivam"})
console.log(addTwwo(3,4))
