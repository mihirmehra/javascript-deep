// Immediately Invoked Function Expressions (IIFE)
// we use iife to protect the code form the global polution

(function chai(){
    // named IIFE
    console.log("db conneted");
})(); // the semi colan is most important to end the invoke of a iife otherwise the code below will ot work

((name) => {
    // unnamed IIFE
    console.log(`db conneted ${name}`);
})("mihir");
