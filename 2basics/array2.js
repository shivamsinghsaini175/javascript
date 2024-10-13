const marvel=[" thor ", "ironman"]
const dc=["Super","wonderw"]

// marvel.push(dc) // array ke andar arryay
// console.log(marvel);
// console.log(marvel[2][1]); // to access the array inside of array 
//  // bad method to access

// const newhero=marvel.concat(dc)  // another way
// console.log(newhero);

const allhero=[...marvel,...dc]  // mostly used bcs single values kr deta h arrya mai 
console.log(allhero);

const anarray=[1,2,3,[4,5,6],7,[2,5,7,[5,8]]]
const real_anarray=anarray.flat(Infinity) // make a single array 
console.log(real_anarray);


// to convert another form of data to array 

console.log(Array.from("shivam")) //it will convert it into array 

console.log(Array.from({names: "shivam"})) // give obeject  // intresting case as it doesn't know which has to convert key or value 

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3)); // give a cobination of variable as new array 

