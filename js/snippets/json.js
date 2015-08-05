// Example of working with JSON objects in JavaScript

var employeeJson = { 
          "employees": [
              {"firstName" : "Timur", "lastName" : "Celikel"},
              {"firstName" : "John", "lastName" : "Smith"},
              {"firstName" : "Robert", "lastName" : "Sanders"}
          ]
};

console.log(employeeJson);             // Prints entire employees JSON object

console.log(employeeJson.toString());  // Doesn't work. Just prints "[object Object]"

console.log(employeeJson.employees[0].firstName);       // Prints "Timur"

var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';
            
var textToObject = JSON.parse(text);        // Would convert string to JSON object

console.log(textToObject);                  // Prints object representation 

console.log(textToObject.phone);            // Prints "555 1234567"

// Example with poorly formatted JSON string (missing : between name parameter and value)
var badText = '{"name" "John Johnson","street":"Oslo West 16","phone":"555 1234567"}';

//var badTextToObject = JSON.parse(badText); 		// Throws error
            
/* XML equivalent of JSON object above
<employees>
    <employee>
        <firstName>John</firstName> <lastName>Doe</lastName>
    </employee>
    <employee>
        <firstName>Anna</firstName> <lastName>Smith</lastName>
    </employee>
    <employee>
        <firstName>Peter</firstName> <lastName>Jones</lastName>
    </employee>
</employees>
*/

// -----------------------------------------------------------------------------
// Example creating JSON string from JS object and parsing back to an object

var carObject = {
  parts : ["engine", "wheels", "seats", "radiator"], 
  driver : "Timur", 
  price : 23000
};

console.log(carObject);

// Create a string out of JS object
var carString = JSON.stringify(carObject);
console.log(carString);

// Create a JSON object by parsing JSON string
var carJSON = JSON.parse(carString);
console.log(carJSON);

/* Note that JSON is limited in that it cannot store functions - the only values it 
 can contain are:

    objects (literals)
    arrays
    numbers
    booleans
    strings
    nulls
   */
