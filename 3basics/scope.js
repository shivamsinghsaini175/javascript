//{}// scope
// child can access parent class variable 
function one(){
    const username="shivam"
    function two()
    {
        const website="youtube"
        console.log(username)
    }
   // console.log(website);
    two()
}
//one() 

//====================intresting========================
console.log(addone(5))   //isko phele b likh sakte h firr b chale ga but nichhe wala ni kar sakte 

function addone(num)
{
    return num+1
}


const addtwo=function(num)   // also called a expression

{
    return num+2
}
console.log(addtwo(5));

