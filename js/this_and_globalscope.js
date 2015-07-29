// Example shows another way the 'this' context can change from local to global when a method is assigned to a variable 

var data = [
  {name:"Samantha", age:12},
  {name:"Alexis", age:14}
];

var user = {
  // this data variable is a property on the user object
  data    :[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
  ],
  showData:function (event) {
    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

    // This line is adding a random person from the data array to the text field
    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

//user.showData();			// Displays T. Woods or P. Mickelson from user data array
    
// Assign the user.showData to a variable
var showUserData = user.showData;
    
// When we execute the showUserData function, the values printed to the console are from the global data 
// array, not from the data array in the user object. Samantha 12 or Alexis 14 (from the global data array). 
// If global data array is renamed we get an error			
showUserData();