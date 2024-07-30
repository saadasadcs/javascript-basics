/*

So, the object is not iterable on for of loop as wee see in 24

*/

// const myObj ={
//     name:"Saad",
//     sapId:"70109951",
//     cgpa:3.01
// }



// for (const key in myObj) {

//     // console.log(key) // only return the key not value
    
// }



for (const key in myObj) {

     console.log(`key : ${key} , Value : ${myObj[key]}`) 
}



/*
NOTE:
map is not iterable in for in loop
*/

// const map = new Map()

// map.set('GOT' , 'Games of Thrones')
// map.set('HOD' , 'House of Dragons')

// for (const key in map) {
//     console.log(key)
// }