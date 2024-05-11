//IIFE
// Immediately Invoked Function Expressions (IIFE)

/*

This are those type of functions which are run once at the start of a file execution process

TLDR :executed immediately after it is defined.
Basic structure :
(function() {
   Function logic here
})();



Use Cases of IIFE:
 - Avoid polluting the global namespace.
 - Create closures in JavaScript.
 - Encapsulate private and public variables and methods.
 - Execute async and await functions.
 - Work with require functions.

*/
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // () is the input field
// Remember it is important that if you have more than one IIFE, then close the IIFEs with a semicolon, 
// otherwise after the first IIFE runs, the rest of the IIFEs won't run as the first one has not ended yet

( (name,num) => {
    console.log(`DB CONNECTED TWO ${name}`);
    console.log(`${num}`);
} )('hitesh',25)
