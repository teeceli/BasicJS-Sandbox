// Example shows how to use apply to change the context of 'this' references. ECMAScript 3 compatible 
// The apply and call methods are almost identical when setting the this value except that you pass the 
// function parameters to apply() as an array, while you have to list the parameters individually to pass 
// them to the call() method.

var person = {
        firstName: "Penelope",
        lastName: "Barrymore",
        showFullName: function () {
            console.log(this.firstName + " " + this.lastName);
        		
          	// We could have also written this:
            console.log(person.firstName + " " + person.lastName);
        }
};

// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method 
// // on the person object. And the use of "this" inside the showFullName() method has the value of the person object
person.showFullName();         // Prints Penelope Barrymore : Penelope Barrymore
    
// If we invoke showFullName with a different object:
var anotherPerson = {
    firstName   :"Rohit",
    lastName    :"Khan"
};

// We can use the apply method to set the "this" value explicitly
// "this" gets the value of whichever object invokes the "this" Function, hence:
person.showFullName.apply(anotherPerson);     // Prints Rohit Khan : Penelope Barrymore
