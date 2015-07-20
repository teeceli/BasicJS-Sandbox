// Example of JavaScript function scope with function hoisting. The concept to take away here is that 
// when variable declarations are hoisted they are hoisted to the top of the function and not the top of the 
// program. They can overwrite variables in the global namespace if you aren't careful. When we declare the "scope"
// variable in the global scope and the function scope we are dealing with two distinct variables. The original global
// "scope" variable's value is preserved when declaring a new "scope" variable locally in the function. 

var scope = "global";

function f() {
  
  console.log(scope);         // Prints "undefined" with line below un-commented, otherwise prints "global"

  var scope = "local";        // This causes the above console.log(scope) to return "undefined" instead of "global". 
  										// The reason for this is that the declaration of the identical nested "scope" variable 
  										// is hoisted to the top of the function (overwriting the global scope variable) 
  										// Also, shows a warning that the variable "scope" is already defined when 
  										// trying to declare it again. 
  
  scope = "local";            // Re-initialize scope variable; redundant with line 9 un-commented
  
  console.log(scope);         // Prints "local"
  
  var newScope = "new scope";
  
  console.log(newScope);       // Prints "new scope"
}

f();

console.log(scope);       // Prints "local" with line 9 commented out, otherwise prints "global"

console.log(newScope);    // Throws error