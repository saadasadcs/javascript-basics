// immediate invoke function expression

/*
An IIFE is a function that runs as soon as it's defined. It helps create a new scope, 
preventing variables from affecting the global environment.


there is a problem due to the pollution of global scope many times, so to remove the
pollution of global scope we use immediate invoke function expression ( which exceute immediately )

*/

(function conn (){
    
    // named IFFE

    console.log("You have set up conn")
}) ();


// Arrow iffe
(
    (name) => {

        console.log(`Your name is ${name}`)

    }
) ("Saad")