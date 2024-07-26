const studentRecord ={
    name: "Saad",
    sapId:70109951,
    cgpa:3.0,

    result: function()
    {
        console.log(`NAME : ${this.name}, Sap Id: ${this.sapId}, Cgpa: ${this.cgpa}`)

        /*
            this function refers current context 
            all code inside
            {
                current context 
            }
            To access the current context we use this function
        */

        // console.log(this)
    }
}

// studentRecord.result()

// studentRecord.cgpa = 3.14

// studentRecord.result()

// console.log(this)





// Arrow Function

const sum = (num1, num2) => {

    return num1 + num2

}

// console.log(sum(12,3.6))

const subtract = (num1, num2) => num1 - num2

// console.log(subtract(12,3.6))


// Ex

// Global variable
const firstName = "Saad";

const lastName = {
  name: "Asad",

  // Regular function refers to the object's property
  getLastName() {
    console.log(`${this.name}, is the Last Name`);
  },

  // Arrow function refers to the global variable
  getFirstName: () => {
    console.log(`${firstName}, is the First Name`);
  }
};

lastName.getFirstName(); // Output: Saad, is the First Name

lastName.getLastName();  // Output: Asad, is the Last Name
