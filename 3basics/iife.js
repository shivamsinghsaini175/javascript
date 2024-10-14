// Immediately Involed Function Expression(IIFE)

(function chai(){
    //named iife
    console.log(`BD connected`)
})();

// global variable se polluted na ho isliye 
( (name) => {      // arrow function
    // unnamed iife
    console.log(`db connection ${name}`)
} )("shivam");