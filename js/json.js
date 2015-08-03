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
