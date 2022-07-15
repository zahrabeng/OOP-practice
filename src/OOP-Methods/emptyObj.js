/*
    We can create an empty object and add properties to
    this object. 
    These properties can also be functions
*/

const obj2 = {} //creates an empty object

obj2.name = "Tom" //adds name property with value
obj2.score = 6
obj2.increment = () => {
    obj2.score++
}

const property = "age"
obj2[property] = 21 //square bracket notation only used with variables eg 
                    //if you wanted a variable as a property

console.log(obj2) // will return the object with all the added properties