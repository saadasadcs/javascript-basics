// const numbers = [7,0,1,0,7,8]

// const newNumbers = numbers.map( (num) => num + 13 )

// console.log(newNumbers)




// Chaining in js -> multilple functions at same time

// const numArr = [1,2,3,4,5,6,7,8,9,10]

// const newNumArr = numArr
//                     .map( (num) => num * 6 )
//                     .map( (num) => num - 13)
//                     .filter((num) => num >= 40 )

// console.log(newNumArr);




// Reduce methodd in js

const numArry = [1,2,3,4]

// Synatx 1

// const storeAt = numArry.reduce( function (accumulator, currentValue) {
//     console.log(`Contain Temp Value : ${accumulator} , Current Valie in Array ${currentValue}`)
//     return accumulator + currentValue
// }, 0)

// console.log(storeAt)


// synatx 2

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10




// Ex

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

