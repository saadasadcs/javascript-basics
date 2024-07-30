// const lang = ["c++","c#","dotnet","react","nodejs"]

// // simple call back function

// lang.forEach (function (value) {
//     // console.log(value)
// })


// // arrow callback function with for each

// lang.forEach((val)=>{
//     // console.log(val)
// })



// // another syntax

// function getValues(values)
// {
//     console.log(values)
// }

// // lang.forEach(getValues)




// lang.forEach((values, index, arr) => {
//     console.log(values, index, arr)
// })





// [{},{},{},]

const codingLang = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

codingLang.forEach( (item) => {
    
    console.log(item.languageFileName);
} )

