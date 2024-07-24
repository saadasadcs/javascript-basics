// Two ways to define a objev=ct in js

// 1- singleton ( constructor )

// 2- objects ( literals)

const sapId = Symbol("id") // use a symbol keword to make it unique 

const studentRecord = {
    name: "Saad",
    
    "fullname" : "Saad Asad", // at
    
    [sapId]: 70109951, // Syntax to use variable with symbol keyword inside a object
    
    email: "saadasad@cs.com",
    
    courseName:"Javascript",
}

// console.log(studentRecord.name)

// console.log(studentRecord["fullname"]) // you cannot call it by dot another method to call it use []

// console.log(studentRecord[sapId]) // you cannot call it by dot another method to call it use []

// studentRecord.email = "saadasadcs@google.com"

// console.log(studentRecord)

// Object.freeze(studentRecord) // it means you cannot change the value i.e lock the object

// studentRecord.email = "saadasad@cs.com"

// console.log(studentRecord)

studentRecord.greetings = function(){
    console.log("Hello Student")
}

console.log(studentRecord.greetings())

studentRecord.hello = function(){
    console.log(`Hello ${this.name}, Your Email : ${this.email}`)
}

console.log(studentRecord.hello())
