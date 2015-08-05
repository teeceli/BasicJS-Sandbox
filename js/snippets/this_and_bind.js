// Example shows how to use bind to change the context of 'this' references. ECMAScript 5 compatible 

var user = {
      data:[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
      ],
  		clickHandler:function (event) {
   		var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

    		// This line is printing a random person's name and age from the data array
    		console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
  		}
};

// The button is wrapped inside a jQuery $wrapper, so it is now a jQuery object
// And the output will be undefined because there is no data property on the button object
//$("#button").click(user.clickHandler);  					   // Error: Cannot read property '0' of undefined

//We have to bind the clickHandler method to the user object like this:
$("#button").click(user.clickHandler.bind(user));     	// Prints P. Mickelson

//HTML
//		<!DOCTYPE html>
//		<html>
//			<head>
//				<script src="https://code.jquery.com/jquery-1.6.4.js"></script>
//				<title>JS Bin</title>
//			</head>
//			<body>
//				<div id="button">Button</div>
//			</body>
//		</html>