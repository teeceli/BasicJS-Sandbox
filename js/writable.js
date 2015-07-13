// Example of setting an object property to {writable: false} and what happens when we try 
// to write a new value to this property. Fails silently with 'use strict' off - i.e. just displays 1 again, 
// throws an error with 'use strict' turned on. 

(function()
{
    //'use strict';
  
    var o = {};
    Object.defineProperty(o, "x", { 
        value : 1,
        writable: true,
        enumerable: false,
        configurable: true
      }
    );
    console.log(o.x);
    
    Object.defineProperty(o, "x", {writable: false});
    o.x = 2;
    console.log(o.x);
  
}());