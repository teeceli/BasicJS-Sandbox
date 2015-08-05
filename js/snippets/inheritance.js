// Example of using create() method for inheritance. ECMAScript 5 compatible.

var Person = {
      name: "Timur",
      age: 32,
      type: 'human',
      greet: function(){ 
          console.log("My name is " + this.name + " and I am a " + this.type);
      }
};

var Robot = {
      name: "C3P0",
      age: 100,
      type: 'robot',
      greet: function(){ 
          console.log("My name is " + this.name + " and I am a " + this.type);
      }
};

var human = Object.create(Person);
human.greet();									// Prints "My name is Timur and I am a human"
var human1 = Object.create(Person);
human1.name = "Sam";
human1.greet();								// Prints "My name is Sam and I am a human"

var robot = Object.create(Robot);
robot.greet();									// Prints "My name is C3P0 and I am a robot"

var Animal = Object.create(Person);
Animal.type = 'cat';

var cat = Object.create(Animal);
cat.name = 'Felix';
cat.greet();									// Prints "My name is Felix and I am a cat"