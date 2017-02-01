
// Object initializers and methods

// Create an object called loaf using an object initializer ({}) with two 
//  properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.


var loaf = {
  flour: 300,
  water: 200,
  hydration: function(){
    return (this.water/this.flour)*100
  }
  
};


console.log(loaf.hydration());




// Iterating over an object's properties

// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.
// 3

var myObj = {
  foo: "banana",
  bar: 34,
  fum: [1,2,3,4],
  quux: true,
  spam: 900 
}

for(var key in myObj){
  console.log(key + " " + myObj[key] )
}


// Create an object with a property called meals which is an array of strings: 'breakfast', 
// 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.


var newObj = {
  meals: ['breakfast','second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(newObj.meals[3])


// Create 3-5 objects, each with a name and a job_title. Use people you know, or characters from fiction, 
// or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

var myArr = [
  job1 = { 
    name: "Dave",
    jobTitle: "developer"
  },
  job2 = { 
    name: "Marcy",
    jobTitle: "fire-eater"
  },
  job3 = { 
    name: "Tauhida",
    jobTitle: "instructor"
  }
]

for (var i = 0; i< myArr.length; i++){
  console.log(myArr[i].name + " " + myArr[i].jobTitle);  
}

myArr.forEach(function(i){
  console.log(i.name + " " + i.jobTitle);
})



// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". 
// For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display 
// "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

var bosses = ["President", 'Chairwoman', 'supremeBeing']
for (var i = 0; i< myArr.length; i++){
  myArr[i].boss = bosses[i];
  console.log(myArr[i].jobTitle + " " + myArr[i].name + " reports to " + myArr[i].boss);
}


// Redo your "Cracking the code" problem from Day 1 
// https://gist.github.com/tparveen/76e0a6042fc6e0f02a2f7e0c56994715 
// but this time use an object to store the codes. Instead of having the function accept 
// a word, have the function accept a string and crack the code from the string.

var charCode = function(letter){
    switch (letter) {
  case "a" :
    console.log(" A ");    
    return 2;
    break;
  case "b":
    return 3;
     break;
  case "c" :
    console.log(" C ");       
    return 4;
    break;
  case "d":
    return 5;
     break;
  default:
    return 6;
    break;
    }  
  }


var crackCode = function (encoded){
  var charObj = {
    a:2,
    b:3,
    c:4,
    d:5,
  }
  var words = encoded.split(" ");
  var results = "";
  var firstLetter = "";
  var someNumber;
  var someLetter = "";
  for (var i = 0; i< words.length; i++){
     firstLetter = words[i][0];
        if (charObj.hasOwnProperty(firstLetter)) {
             someNumber = charObj[firstLetter];
             someLetter = words[i][someNumber-1]
             results += someLetter;
         } else {
           results += " ";
           
         }
        }
     console.log(results)
    }
crackCode('craft block argon meter bells brown croon droop');




