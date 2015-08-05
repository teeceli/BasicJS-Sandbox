// Example of User class with assigned prototype methods
function User(name, email){
  
  if (arguments.length != 2) {
		throw new Error("function f called with " + arguments.length + "arguments, but it expects 2 arguments.");
  }

  this.name = name;
  this.email = email;
  this.quizScores = [];
  this.currentScore = 0; 
}

User.prototype = {
  constructor: User,
  saveScore: function(scoreToAdd){
    this.quizScores.push(scoreToAdd);
  },
  
  showNameAndScore: function(){
    var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
    return this.name + " Scores: " + scores;
  },
  
  changeEmail: function(newEmail){
    this.email = newEmail;
    return "New Email Saved: " + this.email;
  }
};

var firstUser = new User("Timur Celikel", "abc@aol.com");
firstUser.changeEmail("abc@gmail.com");
firstUser.saveScore(15);
firstUser.saveScore(22);
console.log(firstUser.showNameAndScore());       					// Prints "Timur Celikel Scores: 15,22"

var secondUser = new User("John Doe", "john.doe@yahoo.com");
console.log(secondUser.showNameAndScore());      					// Prints "John Doe Scores: No Scores Yet"

var thirdUser = new User("Jane Doe");									// Throws bad number of arguments error
