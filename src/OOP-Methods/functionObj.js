/*
    One way that we can make creating objects more reusable
    is to create a function that creates objects. 

    NOTE: there is a downside to this method which is that it
    uses up A LOT of memory, especially if you are doing this for hundreds
    or thousands of objects.

    This is because it creates a copy of the object every time, 
    which takes up space and memory if there are functions included within
    this object. 
*/

function createObject(name, score){
    const obj = {}
    obj.name = name
    obj.score = score
    obj.increment = () => {
        obj.score++
    }
    return obj
}


const person1 = createObject("tom", 7) //creates an object with the arguments of tom and 7
person1.increment() //increments toms score 

const person2 = createObject("amy", 14) // as above
console.log(person1)
console.log(person2)