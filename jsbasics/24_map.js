/*

The Map object holds key-value pairs and remembers the original insertion order of the keys.

Any value (both objects and primitive values) may be used as either a key or a value.

*/

const map = new Map()

map.set('GOT' , 'Games of Thrones')
map.set('HOD' , 'House of Dragons')

// console.log(map)

// for (const key of map) {

//     console.log(key)
    
// }



// this synatx is used to destructure of an array


for (const [key , values] of map) {

    console.log(key , '->' , values)
    
}




// myObj is not iterable incase of for of loop => error

// const myObj = {
//     'name' : "Saad",
//     'sapId':"70109951"
// }

// for (const value of myObj) {
//     console.log(value)
// }





//// myObj is not iterable incase of for of => error

// const myObj = {
//     name : "Saad",
//     sapId:"70109951"
// }

// for (const value of myObj) {
//     console.log(value)
// }

