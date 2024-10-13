// singleton -constructor se banne a jaab 
//object.create
//object literals 
const mySmb=Symbol("key1")
const jsuser={
    name:"shivam ",
    age :18,
    [mySmb]:"mySymkey1", // used as symbol
    //mySmb:"key 1",  // used as stirng
    "full name":"Shivam singh",
    location:"jammu"

}
// console.log(jsuser.name);
// console.log(jsuser["name"]);

// console.log(jsuser.full name); // cannout access this type with . operator so only [] is used 

console.log(jsuser["full name"]);
//console.log(jsuser[mySmb]); // only way to access symbol, special case square bracket without " "

jsuser.age=20   // to override the value

//Object.freeze(jsuser) // to frezze the user 

jsuser.age=31

//console.log(jsuser);

//function 
jsuser.greeting=function(){
    console.log("nameste bhaiyo")
}
console.log(jsuser.greeting)  // gives only function return refernces
console.log(jsuser.greeting()) 

jsuser.greeting2=function(){
    console.log(`nameste bhaiyo, ${this.name}`);
}
console.log(jsuser.greeting2());
