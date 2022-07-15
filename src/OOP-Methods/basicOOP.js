/*
    The main essence of OOP is to aim to store functions
    with their associated data. 
    This is the principle of encapsulation.
*/

const obj1 = {
    username: "Tom", 
    score:3,
    increment: () => {
        obj1.score++
    }
}

obj1.increment() //calling the increment function
console.log(obj1.score) // will return 4




// for(let i = 0; i <= 5; i++){
//     console.log(obj1.score) 
//     obj1.increment()
// }


