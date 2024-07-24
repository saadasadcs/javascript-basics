const studentRecord = {}

studentRecord.sapId = 70109951

studentRecord.name = "Saad"

// console.log(studentRecord)

const newStudentRecord = {
    
    email:"saadasad@cs.com",

    stName:{

        fullname:{

            firstName:"Saad",

            LastName:"Asad"
        }
    }

}

// console.log(newStudentRecord.stName.fullname)

const obj1 = {1:"a", 2:"b"}

const obj2 = {3:"c", 4:"d"}

// const result = Object.assign(obj1,obj2) // first val => target, second val => source 

// console.log(result)

/*

Properties in the target object are overwritten by properties in the sources 

i.e Copy from source to target

*/

// const result = Object.assign({}, obj1, obj2) // {} act as target and obj1 and obj2 act as source 

// console.log(result)

const result ={...obj1, ...obj2} // best practice to use spread method ...

// console.log(result)

const users = [
    {
        id: 1,
        email: "saad@gmail.com"
    },
    {
        id: 1,
        email: "asad@gmail.com"
    },
    {
        id: 1,
        email: "ali@gmail.com"
    },
]

// console.log(users[1].email)

// console.log(studentRecord)

console.log(Object.keys(studentRecord));

console.log(Object.values(studentRecord));

console.log(Object.entries(studentRecord)); // Return array within a array by converting each key element into an array format
