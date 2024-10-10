// dates 
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());

console.log(typeof myDate);  // type of date is object


let myCrateddate=new Date(2023,0,23)  // month start from 0 in js
console.log(myCrateddate.toDateString());

let myCrateddat=new Date("01-12-2004")  // month start from 0 in js
console.log(myCrateddat.toLocaleString());

let timeStamp=Date.now()
console.log(timeStamp);

console.log(myCrateddate.getTime()); // to take timestamp

console.log(Math.floor(Date.now()/1000)) // to convert millisecond into  seconds


let newDate=new Date()
console.log(newDate.getMonth()+1); // same for month +1 bcs in js it starts form 0 ,day

newDate.toLocaleString('default',{  // more customised
    weekday:"long"
})