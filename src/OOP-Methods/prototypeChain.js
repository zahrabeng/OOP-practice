/*
    One good solution that will minimise using memory is
    having an object that stores all of our functions. 

    As the JS runs through our code, if it does not find the
    function within the object it knows to check for the function in the 
    functions store.

    This link is what is known as the PROTOTYPE CHAIN. 
*/

function userCreator(name, score){
    const newUser = Object.create(functionStore); //creates the object that has the specified prototype
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const functionStore = {
    increment: function(){this.score++}, // can now be used on any object that has a score property
    login: function(){console.log("You're logged in")}
}

const user1 = userCreator("will", 4)
user1.increment() // function is now bound to the object on the left handside of the dot
console.log(user1)