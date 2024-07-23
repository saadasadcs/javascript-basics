"use strict"; //we use this keyword to tell the compiler to  treat all JS code as newer version but now it is by default behavior 

// alert( 3 + 3) // we are using nodejs, not browser an the alert pop up will appear when it is embeded it html tags open in browser

console.log(3 + 3) // code readability should be high

console.log("Saad")


let name = "Saad"
let age = 20
let isLoggedIn = false   
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value / empty
// undefined => valuse is not defined yet
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


// Summary 

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Saad",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
