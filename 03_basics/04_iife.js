// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();

// Unknow IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("ronit")


