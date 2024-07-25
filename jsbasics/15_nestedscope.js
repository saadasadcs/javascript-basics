// Nested Scope

function stName(){
    const username = "Saad"

    console.log(username)

    function stEmail(){
        const email ="saadasad@cs.com"
        console.log("Username :", username + "UserEmail :", email)
    }

    // console.log(email) // Variables declared inside a block are not accessible outside that block.

    
}

// console.log(username) // Variables declared inside a block are not accessible outside that block.

// stName()

stEmail() 