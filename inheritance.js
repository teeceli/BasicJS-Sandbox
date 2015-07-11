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
human.greet();

var human1 = Object.create(Person);
human1.name = "Sam";
human1.greet();

var robot = Object.create(Robot);
robot.greet();

var Animal = Object.create(Person);
Animal.type = 'cat';

var cat = Object.create(Animal);
cat.name = 'Felix';
cat.greet();