// Differences between null and undefined

// Logs undefined - declaration is hoisted but initialization occurs at location of var statement
console.log(s);

var s = 11;

// Logs 11
console.log(s);

// Throws Error - a is neither declared nor initialized
console.log(a);