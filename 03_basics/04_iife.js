// Immediately Invoked Function Expressions (IIFE)



// IIFE are the codes we want to immediately execute after starting the program & to avoid tp much of global variables polluting







// example of named iife
(function chai(){                                 // syntax of iife ........   ()();
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                             // iife doesnt know when to stop executing so we need to add ; at the end



//example of unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')            // how to pass argument in iife function
