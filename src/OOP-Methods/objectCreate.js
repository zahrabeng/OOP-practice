/*
    We can create an empty object and add properties to
    this object using a specific method called Object.create 
    
*/

const obj3 = Object.create(null) //creates an empty object

obj3.name = "zahra"
obj3.score = 10
obj3.increment = () => {
    obj3.score++
}

obj3.increment() //increments score
console.log(obj3)
