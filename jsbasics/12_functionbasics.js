// function hello() {
     
// console.log("My Name is Saad Asad");
    
// }

// hello();



// function sum(num1, num2){
    
//     console.log(num1 + num2)

// }
// sum(12, 14);




// function addtwonumbers(num1 , num2){
//     let result = num1 + num2
//     return result;
// }

// const result = addtwonumbers(13.5, 6.7)

// console.log("Result : " , result)




// function addtwonumbers(num1 , num2){
//     return   num1 + num2
// }

// const result = addtwonumbers(13.5, 6.7)

// console.log("Result : " , result)



// function userLoggedIn(username){
//     return ` ${username} , just logged in` 
// }
// console.log(userLoggedIn("Saad"))




// function userLoggedIn(username = "Saad"){
//     return ` ${username} , just logged in` 
// }
// console.log(userLoggedIn()) // if you do not pass any argument ( value ) then it takes the default value (username = "Saad")



// function userLoggedIn(username = "Saad" ){

//     if(username === undefined){

//         console.log("Please Enter Your Name ")

//         return
//     }

//     else{

//         return ` ${username} , just logged in` 
//     }
// }
// console.log(userLoggedIn())



function userLoggedIn(username = "Saad" ){

    if(!username){

        console.log("Please Enter Your Name ")

        return
    }

    else{

        return ` ${username} , just logged in ` 
    }
}
console.log(userLoggedIn("Saadiee"))
