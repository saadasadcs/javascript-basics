const numbers = [7,0,1,0,9,9,5,1]

// const newNumbers = numbers.filter ( (num) => num >=5)

// console.log(newNumbers)



/*
NOTE :

WHEN USE SCOPE {} use return keyword always

*/



// const newNumbers = numbers.filter ( (num) => {
//     return num >=5
// })

// console.log(newNumbers)




// ForEach

// const newArray = []

// numbers.forEach ( (num) => {
//     if(num > 5)
//     {
//         newArray.push(num)
//     }
// })

// console.log(newArray)



//Example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter ( (bk) => bk.edition >= 2000 )

    let userBooks = books.filter ( (bk) => {
        return bk.genre === "History" && bk.edition >= 2000
    } )

  console.log(userBooks)