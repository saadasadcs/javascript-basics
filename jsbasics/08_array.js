// Array slice and splice method

const myArr = [0,1,2,3,4,5]

console.log("Orignal Array")

console.log(myArr); // orignal Array

console.log(" Array Slice Method ")

const myn1 = myArr.slice(0, 3) // first val in slice method indicates that start from that index and not include the last limit  

console.log(myn1);

console.log(" Array Splice Method ")

const myn2 = myArr.splice(1, 3) 

console.log(myn2);

console.log("Orignal Array Which is Manipulated By Splice Function")  //  So, splice method manipulates the orignal array 

console.log(myArr); 

const studentNames = ["saad","asad","ali","umair"]

const courseNames = ["OOP","DSA","DAA","DBMS"]

studentNames.push(courseNames) // return array within a array

console.log(studentNames)

console.log(studentNames[4][3]) // access in a array

const allRecords = studentNames.concat(courseNames) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.

console.log(allRecords) 

const completeRecords = [...studentNames, ...courseNames] //spread method ... => into individual array elements 

console.log(completeRecords)

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]] // array within a array within a array

const real_another_array = another_array.flat(Infinity) // return elements into silngle array 

console.log(real_another_array);

console.log(Array.isArray("Saad")) // check whether Saad is an array or nor

console.log(Array.from("Saad")) // convert it into an array format

console.log(Array.from({name: "Saad"})) // Return Emty Array you have to define key etc

const a = 70109951

const b = 70109453

const c = 70109067

console.log(Array.of(a,b,c)) // Returns a new array from a set of elements.





