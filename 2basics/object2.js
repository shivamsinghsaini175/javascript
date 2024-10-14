// object singleton 

const tinderUser=new Object()

tinderUser.id ="123abc"
tinderUser.name='shivam'
tinderUser.logIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstName:"Shivam",
            lastName:"saini"

        }
    }
}
console.log(regularUser.fullname?.userfullname.firstName);  // access object inside of object   ? is for check it exist and another way is to use if else if 

const obj1={ 1:"a",2:"b"}
const obj2={ 3:"c",4:"d"}
// merge 2 objects
// const obj3=Object.assign({},obj1,obj2) // {} is  a option target  adn other is source 
const obj3={...obj1,...obj2}  // combine araay 
console.log(obj3);

console.log(Object.keys(tinderUser)); // takes keys in array and make it easy to loop 

console.log(Object.values(tinderUser)); // make array of values
console.log(Object.entries(tinderUser)); // to make arrays of key and values in key: value pair

console.log(tinderUser.hasOwnProperty('LogIn'));

// objects 3 
const course={
    courseName:"js",
    price:"999",
    courseInst:"shivam"
}

// course.courseInst   another way but prefer to use the second one 
// const{courseInst}=course // {} means deconstrting 
const{courseInst:inst}=course // also give own name like courseInst: inst
// console.log(courseInst);
console.log(inst);   
// json
// {
//    " name":"shivam",
//     "courseName":"js",

// }
