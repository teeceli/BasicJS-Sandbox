// Example of arrays and differences between toString() and valueOf()
//https://javascriptweblog.wordpress.com/2010/05/03/the-value-of-valueof/

var myArray = ["one", "two", "three"];
console.log(myArray);                        // Prints ["one", "two", "three"]

var myArrayString = myArray.toString();
console.log(myArrayString);                  // Prints "one,two,three"
console.log(myArrayString.split(","));       // Prints ["one", "two", "three"]
console.log(myArrayString.split("t"));       // Prints ["one,", "wo,", "hree"]
console.log(myArray.valueOf());              // Prints ["one", "two", "three"]

var num = 2;
console.log(num);                             // Prints 2
console.log(num.toString());                  // Prints "2"
console.log(num.valueOf());                   // Prints 2

var myObj = { "first" : 1, "second" : 2};
console.log(myObj);                   // Prints [object Object] { first: 1, second 2 }
console.log(myObj.toString());        // Prints [object Object]
console.log(myObj.valueOf());         // Prints [object Object] { first: 1, second 2 }