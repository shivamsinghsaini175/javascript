const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) /// also take negative so start from behind
console.log(newString);

const anotherString = gameName.slice(-8, 4)   // dont take negative 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());   //// works on white space and also trimstart and trimend is there 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))  /// replace %20 with -

console.log(url.includes('sundar'))   // check for sundar in url

console.log(gameName.split('-'));
