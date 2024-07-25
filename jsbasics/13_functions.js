
// ... is rest or spread method in js return values in an array format 

function handlemultpleValues(...values){

    return values

}

// console.log(handlemultpleValues(12))

// console.log(handlemultpleValues(12,13))

// console.log(handlemultpleValues(12,13,14))




// how to handle objects in a function

const studentRecord ={
    name:"Saad",
    sapId:70109951
}

function handleObj(anyobject){

    return `Name : ${anyobject.name} , Sap Id : ${anyobject.sapId}`

}

// console.log(handleObj(studentRecord))

// console.log(handleObj({
//     name:"Asad",
//     sapId:7010678
// }))




// How to handle Arrays in a Function

// const myArr = [10, 20, 30, 40, 50]

// function handleArry(getArray){

//     return getArray

// }

// console.log(handleArry(myArr))



const myArr = [10, 20, 30, 40, 50]

function getSecondIndexValue(getArray){

    return getArray[2]

}

console.log(getSecondIndexValue(myArr))


