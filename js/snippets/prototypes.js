// Example of creating a Range class and defining all of its prototype properties two different ways

function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
	constructor: Range,     // Explicitly set the constructor back-reference
	includes: function(x) { return console.log(this.from <= x && x <= this.to); },
	foreach: function(f) {
		for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
	},
	toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

var r = new Range(1,3);

r.includes(2);                // => Prints true: 2 is in the range
r.foreach(console.log);       // Prints 1 2 3
console.log(r.toString());    // Prints (1...3)
console.log(r.toString);		// Mistakenly prints "function () { return "(" + this.from + "..." + this.to + ")"; }"

// Another way of setting up our Range class by extending the predefined Range.prototype object 
// so we don't overwrite the automatically created Range.prototype.constructor property.
Range.prototype.includes = function(x) { return console.log(this.from<=x && x<=this.to); };

Range.prototype.foreach = function(f) {
	for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
};

Range.prototype.toString = function() {
	return "(" + this.from + "..." + this.to + ")";
};