 function sayNmae(){
    console.log("s")
    console.log("s");
    

 }
sayNmae // function refernces
sayNmae() // function call

// function addTwo(number1,number2) // with no retunr type 

// {
//     console.log(number1+number2)
// }


// addTwo(2,3)


function addTwo(number1,number2) 

{
   // return result=number1+number2
    return number1+number2
}
const result=addTwo(2,5)
// console.log("result:",result);

function loginUserMessage(username)// to avoid deafult add some value in username="sam"
{  if(username===undefined)   //if(!username) another way
{
    console.log("please enter a username");
    return
    
}
    return `${username} you just logIn`

}
// console.log(loginUserMessage("shivam")) 
// console.log(loginUserMessage())// if name is not provide ...then op is undefined in place of name

function calculatePrice(...num1) //... rest operator
{
    return num1

}
console.log(calculatePrice(200,300,400)) 

const user={
    username:"shivam",
    price:199
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"shiva",
    price:200
})

const myNewARR=[200,300,400]
function returnsecondvalue(getArr){
    return getArr[2]
}
console.log(returnsecondvalue(myNewARR));
console.log(returnsecondvalue([300,500,30004,678879]));
