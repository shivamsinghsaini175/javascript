const scrore =400
console.log(scrore);   // inbuilt function 

const balance=new Number(100)         //get more inbuilt function
console.log(balance)

console.log(balance.toString().length);   // can convert into string and get addtitonal property of string 

console.log(balance.toFixed(2));   // to fixed length to 2 after point  always use in ecommerce

const otherNum=23.43454

console.log(otherNum.toPrecision(3));  //take precison from the first digit and return the op in string format

const hun=100000
console.log(hun.toLocaleString());  // to add commma by default in us standard

console.log(hun.toLocaleString('en-IN'));

// maxInt and MaxInt can be used to set min and max value of interger

//============================maths====================//
console.log(Math)
console.log(Math.abs(-4))  
console.log(Math.round(4.6)); // round of to next  // ceil to upper value and floor to lower value

// max used 
console.log(Math.random());  // gives between 0 and 1
console.log((Math.random()*10)+1);  // gives 1 to 10 // add 1 to avoid 0 case

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) // random generate value between 10 and 20