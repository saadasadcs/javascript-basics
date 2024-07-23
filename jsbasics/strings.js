const name = "Saad"

const sapId = 70109951

console.log(name + sapId) // old way

console.log(`Nmae : ${name}, Sap Id : ${sapId}`);

const studentEmail = new String ("saadasad@cs.com")

// different string functions

console.log(studentEmail[5]);

console.log(studentEmail.__proto__); // return a object


console.log(studentEmail.length);

console.log(studentEmail.toUpperCase());

console.log(studentEmail.charAt(2));

 console.log(studentEmail.indexOf('d'));

const newString = studentEmail.substring(0, 4) // 0 1 2 3 = 4 means last limt is not included
console.log(newString);

const anotherString = studentEmail.slice(-2, 4) //deals with neg value
console.log(anotherString);

const newStringOne = "   saad    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the whitespaces etc

const url = "https://saad.com/saad%20asad"

console.log(url.replace('%20', '-'))

const studentRecord = "Saad-70109951-Cs"

console.log(studentRecord .split('-')); // on the basis of dash it converts them into an array
