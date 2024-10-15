const myNum=[1,2,3,4,5,6,7,8,9,10]

// const Num=myNum.map((num)=>num+10)
// console.log(Num);

const newNum=myNum
                .map((num)=>num*10)
                .map((num)=> num+1)    // first se value isse pass hogi 
                .filter((num)=>num>=40)

console.log(newNum);
