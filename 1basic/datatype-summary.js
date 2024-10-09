// primitive type 

/*
7 types 
stirng 
number
boolean 
null-empty 
undefined - value in di 
symbol - unqiue value
BigInt - big int value


*/

// reference ( not primitive )

/*
array 
objects
functions
*/
//javacript  is dynamically type language 


const id =Symbol('1234')
const anotherId=Symbol('1234')

console.log(id===anotherId);

const bigNumber= 12232456787654345647n // n make it bigInt

 // array 
 const heros=["shivam" ,"sam"]
 // objects

 let boj=
 {
    name:"shivam"
 }

const myFunction=function()
{
    console.log(" hello ");
}