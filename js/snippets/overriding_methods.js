// Example of overriding default methods on JavaScript objects or using prototype to extend and create our own

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
// Displaying fruits results in: Banana,Orange,Apple,Mango

// Overriding toString functionality of Array. (Obviously inadvisable but this is for demo purposes). 
// Also notice that when displaying an array the toString() method is used by default.
 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
Array.prototype.toString = function() { return "hello";};
document.getElementById("demo").innerHTML = fruits;
// Displaying fruits results in:  hello

// Instead of overriding we add a new type of toString() method to the prototype 

var fruits = ["Banana", "Orange", "Apple", "Mango"];
Array.prototype.toStringHello = function() { return "hello";};
document.getElementById("demo").innerHTML = fruits.toStringHello();
// Displaying fruits.toStringHello() results in:  hello

