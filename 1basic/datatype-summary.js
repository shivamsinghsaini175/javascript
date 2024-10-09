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


// stack( premitive ) and heap( non prem)

// here copy is shared // stack memory

 let names= " shivam "
 let anname =names
  anname="sam"
  console.log(names);
  
  console.log(anname);

  // heap memory direct memory  no copy 
 let userOne=  {    // in  stack 
    email:"shivam@gmail.com",
    namess:"shivam"                    //stored in heap

 }
 let userTwo=userOne

 userTwo.email="Saini@gmail.com"    // isse dono ki email change ho jaye gi bcs wo heap mai store h aur dono ko same pointer ja reha h

 console.log(userOne.email);
 console.log(userTwo.email);
 
 
