const userEMail="shivam@gmail.com"

if(userEMail)
{
    console.log("got email");
    
}
else
{
    console.log("dont have email");
    
}
// falsy
// false , 0 , -0 , BigInt 0n ,"", null , undefined , NaN
//turthy(suprisring truthy value)
// "0","false"," ",[ ],{ },function(){} 
// object empty or not and same for array
const enpobj={}
if(Object.keys(enpobj).length===0)
{
    console.log("empty");
    
}
//gk
// false==0 --true
// false==''--true
// 0==''--true

//Nullish Coalscing Operator(??):null undefined

let val1;
// val1=5 ?? 10  // 5 assigned
// val1=null ?? 10 // 10 assigned
// val1=undefined ?? 15 // 15 is assigned
val1=null ?? 10 ?? 15 //asggined value with comes after null 
console.log(val1);

//Terniary Operator
// condition ? true:false
const icePrice=100
icePrice >=80 ? console.log("greater than 80"):console.log("less than 80");
