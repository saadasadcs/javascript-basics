// Ex : 1

// Block scope :  Variables declared inside a block are not accessible outside that block.

if (true) {
    let blockVar = 20;
    console.log(blockVar); // Accessible
}

// console.log(blockVar); // Error: blockVar is not defined


// Ex : 2

// global scope

var c = 300 

if(true){

    // block scope

    let a = 10 

    const b = 20

    var c = 30 

}

// console.log(a)

// console.log(b)

console.log(c) // thats why we dont use var variable




// Ex : 3

// Global scope : Variables and functions declared in the global scope are accessible throughout the entire program.

let globalVar = 10;

function globalFunction() {
    console.log(globalVar); // Accessible
}


// Ex : 4

// global scope


// let a = 100 
// const b = 200

// if(true){

//     Block Scope

//     let a = 10
//     console.log("Block Scope a :", a)

//     const b = 20
//     console.log("Block Scope b :", b)

// }

// console.log("Global Scope a :", a)

// console.log("Global Scope b :", b)