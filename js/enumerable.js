// Example script setting an object parameter to non-enumerable and iterating over the properties in the object

(function()
{
  
    var foo = { bar: 1, baz: 2 };
    console.log(foo);

    Object.defineProperty(foo, "bar", {enumerable: false});
    var descriptor = Object.getOwnPropertyDescriptor(foo, 'bar');
    console.log(descriptor);

    for (var prop in foo) {
    	console.log(prop);     // outputs 'baz'
    }
  
}());