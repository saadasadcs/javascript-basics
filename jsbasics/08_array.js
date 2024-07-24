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