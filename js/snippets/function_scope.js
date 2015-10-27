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
  										// is hoisted to the top of the function (overwriting the global scope variable). 
  										// Remember that the declaration is hoisted but the assignment happens in its normal place
  										// Also, shows a warning that the variable "scope" is already defined when 
  										// trying to declare it again. 
  
  scope = "local";            // Re-initialize scope variable; redundant with line 13 un-commented. If line 13
  										// is commented, this variable reassignment overwrites global value. 
  
  console.log(scope);         // Prints "local"
  
  var newScope = "new scope";
  
  console.log(newScope);       // Prints "new scope"
}

f();

console.log(scope);       // Prints "local" with line 9 commented out, otherwise prints "global"

console.log(newScope);    // Throws error because newScope is not defined in this scope. 



//--------------------------------- From JS The Good Parts -----------------------------------------
var foo = function() {
  var a = 3, b = 5;
  
  var bar = function() {
    var b = 7;    // new b value with new scope
    // b = 7;     // reassigns b value
    var c = 11;
    
    // At this point, a is 3, b is 7, and c is 11
    console.log('a1 ' + a);
    console.log('b1 ' + b);
    console.log('c1 ' + c);

    a += b + c;
    
    // At this point, a is 21, b is 7, and c is 11
    console.log('a2 ' + a);
    console.log('b2 ' + b);
    console.log('c2 ' + c);
  };
  
  // At this point, a is 3, b is 5, and c is not defined
  console.log('a3 ' + a);
  console.log('b3 ' + b);
  //console.log(c); // c is undefined
  
  bar();
  
  // At this point, a is 21, b is 5
  // This is because 'var b = 7' inside bar() creates a new variable and is not pointing to the original b value in foo(). Remove the var assignment and the original b in the outer function gets reassigned to 7
  console.log('a4 ' + a);
  console.log('b4 ' + b);
};

foo();

// Output is: 
// "a3 3"
// "b3 5"
// "a1 3"
// "b1 7"
// "c1 11"
// "a2 21"
// "b2 7"
// "c2 11"
// "a4 21"
// "b4 5"