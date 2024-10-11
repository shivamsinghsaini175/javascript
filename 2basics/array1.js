// arrays 
const myArr=[0,1,2,3,4,true,"shivam"]

// array always create shallow copy 
const myArr2=new Array(1,2,3,4)

// array method

myArr.push(6)

// myArr.pop();

myArr.unshift(9); // enter in start 
myArr.shift();   // remove from start

// console.log(myArr);
// console.log(myArr.includes(70));   
// console.log(myArr.indexOf(19));

const newArr=myArr.join()   // bind and also change to string 

//slice,splice
 
console.log("A",myArr);

const myn1 = myArr.slice(1, 3)  // dont take end value and also don't manuplate the original array 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // take the end value and also mauplate the orignal by removing the splice array

console.log("C ", myArr);
console.log(myn2);