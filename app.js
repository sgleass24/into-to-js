

// Create 4 variables. One called: "name", one called "pizzaCount", one called totalCost, and one called "isHungry".
// The name variable should be set to your name.
// The pizzaCount variable should be set to a number.
// The isHungry variable should be set to true or false.
// The totalCost variable should be set to pizzaCount variable * the cost of a pizza (you choose the cost)


// var firstName="Shelby";
// var pizzaCount="4";
// var totalCost=4*12;
// var isHungry="True";

// // console.log("her name is" + " " + firstName + " " + "she ate" + " " + pizzaCount + " " + "pizzas, costing her $" + totalCost + " " +  firstName + " " + "was hungry:" + " " + isHungry);

// alert("her name is" + " " + firstName);
// alert("she ate" + " " + pizzaCount+ " " + "pizzas");
// alert("that cost" + " " + "$" + totalCost);
// alert(firstName + " " + "was hungry:" + " " + isHungry);

// ******12 exercise Solutions***********
//1 Write an expression that uses at least 3 different arithmetic operators.
// // The expression should equal 42.
// // Hint: +, -, *, /, and % are possible arithmetic operators
// // Your Code: 
var one=42-12;
var two=5*2;
var three=8/4;

console.log(one + two + three)
//2 Create three variables a string with the name of your favorite food, a boolen answering if it's good for you, and a number with its calories. The first letter of the string should be capitalized. 
// // Your Code: 
var favoriteFood="pizza";
var isItGoodForYou="false";
var calories="400";

console.log("favorite food is" +" "+ favoriteFood + " " +"is it healthy?" + isItGoodForYou + "calories:" + calories) ;
// template literal es6 
console.log(`my favorite food is ${favoriteFood} is it healthy? ${isItGoodForYou} calories: ${calories}`)

// // 3 Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.
// // Your Code:
var egFamily=[ 'Julia', 'James', 'Shelby' ];
// let egFamily=[ 'julia', 'james', 'Shelby' ];
console.log(egFamily);
console.log(egFamily [2]);
// // 4 Fix the right side expression so it evaluates to true.
// // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
// // Your Code:
console.log("ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal")
// // 5 Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
// //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
// //F = C x 1.8 + 32
// //Log the fahrenheit variable to the console.
// // Your Code:
var celsius= 12;
var fahrenheit= celsius * 1.8 + 32;


console.log(fahrenheit);

// //6 Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
// // Blowing from the west
// // Fallen leaves gather
// // In the east.
// // Each string should be printed on its own line.
// // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.
// // Your Code: 
var firstLine="blowing from the west";
var secondLine="fallen leaves gather";
var thirdLine="In the east";
console.log(firstLine + '\n' + secondLine + '\n' + thirdLine);

// //7 Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,
// // red blue
// // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!
// // Your Code:
var thingOne="red";
var thingTwo="blue";

console.log(thingOne);
console.log(thingTwo);

//  //8 Create a variable called fullName and assign it your full name as a string
// // Create a variable called age and addign it your age.
// // Create a varaibel called quote and assign your favorite quote as a string. 
// // Print out the results 
// // Your Code:
var fullName="Shelby Gleason";
var age=29;
var quote="oh how the turn tables";
console.log(quote + " " + '\n' + fullName);

//  //9 Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
// // Print the total to the JavaScript console.
// // Hint: 15% in decimal form is written as 0.15_._
// // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
// // Your Code:
var bill=10.25 + 3.99 + 7.15;
var tip= bill * 0.15
var total=(bill+tip);

console.log(bill);
console.log(tip);
console.log(total);

// //10 Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
// // Your Code:
var awesomeMessage="Howdy";

console.log(awesomeMessage);

//  //11 Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
// //'small' variable lowercase and the 'big' variable capital.
// //console.log out the results
// // Your Code:
var big="im big like an elepant";
var small="im small like a mouse";

console.log(big.toUpperCase() + '\n' + small.toLowerCase());
// //12 Create a variable called 'my time' that will display the currenttime using a ' new Date()' method
//     Create a variable called 'message' that wil introduce the call.
//     Concatinate the two variables together
// Collapse

var myTime= new Date();
var message= "it is currently...";

console.log(message + myTime);






// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var circumference = (2 * radius) * Math.PI;
var area = Math.PI * Math.pow(radius, 2);
var radius=12;


console.log(area);


// It's hot out! Let's make a converter based on the steps here.
// Store a Celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.


// Convert it to celsius and output "NN°F is NN°C."

// Want to find out how old you'll be? Calculate it!

// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.




function myFunction() {

    // block of code goes here
    var message= "Hello World"
    document.getElementById("demo").innerHTML = message;
}


// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// // Call that function 3 times with 3 different values for the arguments.

// function tellFortune(jobTitle, geoLocation, partner, numKids){
//     var future= "you will be a " + jobTitle + " in "  + geoLocation + " married to " + partner + " with " + numKids + " kids. ";
//     document.getElementById("demo").innerHTML=future;
  
    
// }

// tellFortune("bball", "spain", "shaq", "2");
// tellFortune("coder", "new york", "james", "4");
// tellFortune("teacher", "japan", "luke", "1");
// tellFortune("stunt double", "LA", "bob", "3");

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay){
    var maxAge=100
    var totalNeeded=(amountPerDay *365) * (maxAge - age);
    var message= "you will need " + totalNeeded + " cups of coffee to last you to the ripe old age of " + maxAge;
console.log(message);
}

calculateSupply(30, 3)
calculateSupply(25, 1)
calculateSupply(21, 4)
calculateSupply(32, 3)

// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calCircumference (radius){
    var circumference= Math.PI * (2 * radius);
    console.log(circumference);

}
calCircumference(10);

function calArea (radius){
var area = Math.PI * Math.pow (radius, 2);
console.log(area);
}
calArea(12);

/* <script>
let str1 = "Hello ";
let str2 = "today is!" + new Date();
let str3 = " Have a nice day!";
console.log(str1 + srt2+ str3+ "Tomorrow is Hump Day" + "That is mid-week";
</script> */
let str1 = "Hello";
let str2 = "today is!" + new Date();
let str3 = "Have a nice day!";
console.log(`${str1} ${str2} ${str3} Tomorrow is Hump Day. That is mid-week`);

// template literal es6 
// console.log(`my favorite food is ${favoriteFood} is it healthy? ${isItGoodForYou} calories: ${calories}`)


// function getAge(){
//     var mes= prompt("what is your name?");
//     alert(`Hello ${mes}`);
// }
// getAge();

// function sayHello(){
//     var message1= prompt("what is your name?");
//     document.getElementById("demo-6").innerHTML= (`hello ${message1}`);
// }

// sayHello();

function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("demo-0").innerHTML = toCelsius(77);
document.getElementById("demo-1").innerHTML= toCelsius(35);
document.getElementById("demo-2").innerHTML= toCelsius(20);

function calculateDeg(){
    var degree = document.getElementById("deg").value;
    var tempCalc= (5/9) * (degree-32);
    document.getElementById("celDeg").innerHTML=Math.round(tempCalc);

}
calculateDeg();

// document.write('Hello World'+'<br/>'); 
// document.write('Hello World'+'<br/>'); 
// document.write('Hello World'+'<br/>'); 
// document.write('Hello World'+'<br/>'); 
// document.write('Hello World'+'<br/>'); 
// document.write('Hello World'+'<br/>'); 
// document.write('Hello World'+'<br/>'); 
// document.write('Hello World'+'<br/>'); 
// document.write('Hello World'+'<br/>'); 
// document.write('Hello World'+'<br/>'); 
// // these are the same===
// for(let i = 0; i < 10; i++) { 
//     document.write('Hello World' +'<br/>' ); 
//    } 




//     The even/odd reporter
// Write a for loop that will iterate from 0 to 20. 
// For each iteration, it will check if the current number 
// is even or odd, and report that to the screen using document.write (e.g. "2 is even"). %

    

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(){
    var age = document.getElementById("dog").value;
    var ageCalc= age * 7;
    document.getElementById("celDog").innerHTML=(ageCalc);

}
calculateDogAge();



var x= 0;
while (x < 5) {
console.log(x);
x = x + 1;

};

for(i=0; i<10; i++) {
    if (i=== 7) {
    break;
    }
    document.write("The number is" + i + "<br>"); }


for(var i=0; i<=20; i++){
    if(i % 2 ===0){
        console.log(i + `is even`)
    } else{
        console.log(i + `is odd`)
    }
}


// var money= 1500.00;
// var bills= 2500.00;

// if (money > bills) || (money === bills) {
//     document.write("You are covered!");
// }

// else if (money === bills) || (money < 2000) {
//      document.write("you're good, just barely");
// }
// else { document.write("uh-oh!");
    
// } 


// //array literal
// //we assign the array to a variable
// const colors=["blue", "green", "pink", "black", "purple"]
// const myAges=[10, 13, 16, 18, 21]
// const compNums=[12>12, 9==="nine", 1==2, 8==="eight", 5>=5]


// //JS Keyword, built in javascript methods new array()
// var colors= new Array("blue", "green", "pink", "black", "purple");
// var myAges= new Array(10, 13, 16, 18, 21);

// //JS constructor method
// const colors=[];
// colors[0]="blue";
// colors[1]="green";
// colors[2]="pink;";
// colors[3]="black";
// colors[4]="purple";



const classmates=["sebastian", "luz","chris", "michael", "ana", "deven", "april"]
//access an array
console.log(classmates.length);

//loop over an array//for loop
for(i=0; i<classmates.length; i++){
    console.log(classmates);
}


//array methods
// classmates.pop();//removes last item from array-dont need to pass a value
// classmates.push("Ali");//adds item to end of array
// classmates.unshift("luz");//adds an item at the beginning
// classmates.shift();//removes what ever is in first position of array
// classmates.splice(2, 0, "ana");//position change; how many changes; what you adding
//find specific index in array .indexOf()
console.log(classmates); 


//Array Assignments //Create an Array called "donuts" that list 7-10 different items
//1 Using a loop, iterate through this array and console.log all the donuts
//2 Write the command to remove the first donut fron the array
//3 Write the command to remove the last donuts from the array
//4 Write the command to add a new donut "lime zest" to the front of the array
//5 Write the command to add another donut "lemon pie" to the end of the array
//6 Use either the join() or toString() method to convert an array to a string.
//7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
//8 Write the command that gives the indexOf where "chocolate" is located.
//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
//10 **Using the splice method, remove one donut from the array and add another.
//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.

//1// const donuts=["jelly", "chocolate", "glazed", "rainbow sprinkles", "maple bacon", "plain", "strawberry frosted"]
// for(i=0; i<donuts.length; i++){
//     console.log(donuts[i]);
// }
const donuts=["jelly", "chocolate", "glazed", "rainbow sprinkles", "maple bacon", "plain", "strawberry frosted"]
//2// donuts.shift();
//3// donuts.pop();
//4// donuts.unshift("lime zest");
//5// donuts.push("lemon pie")
//6// let text=donuts.toString();
//7// console.log(donuts.slice(2));
//8// console.log(donuts.indexOf("chocolate"));
//9// console.log(donuts.indexOf("glazed"));
//10// donuts.splice(2, 2, "bearclaw");
//11// let withSyed = donuts.concat("bob");
//11// console.log(withSyed);

//12
function getDonuts(){
    const donuts=["jelly", "chocolate", "glazed", "rainbow sprinkles", "maple bacon", "plain", "strawberry frosted"]
    document.getElementById("btn").innerHTML = donuts
}



// Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: “My #1 choice is blue.”
// Bonus: Change it to log “My 1st choice, “My 2nd choice”, “My 3rd choice”, picking the right suffix for the number based on what it is.
var choices = ['red', 'orange', 'pink', 'yellow'];
for (var i = 0; i < choices.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}
for (var i = 0; i < choices.length; i++) {
    var choiceNum = i + 1;
    var choiceNumSuffix;
    if (choiceNum == 1) {
        choiceNumSuffix = 'st';
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd';
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd';
    } else {
        choiceNumSuffix = 'th';
    }
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
}


//objects-data type that let us store collection of properties and methods
// var objectName = {
//     propertyName: propertyValue,
//     propertyName: propertyValue,
// };

//object literal
var sibling={
    name: "Meghan",
    age: 38,
    single: false,
    children: ["Lester", "Lulu"],
    order: "older",
};

//new keyword setting values
// var sibling = new Object();
// sibling.name="Meghan";
// sibling.age=38;
// sibling.single=false;
// sibling.children=["Lester", "Lulu"];
// sibling.order="older";

sibling.gender= "female";
sibling.single=true;
delete sibling.age;
var meeting= (`Hello i am ${sibling["name"]} I am ${sibling["age"]} Am I Single? ${sibling["single"]} I am a ${sibling["gender"]}`);
console.log(meeting);


// The Recipe Card
// Never forget another recipe!
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe= {
    title: "mole",
    servings: 2,
    ingredients:["cinnamon", "cumin", "cocoa"],

};
console.log(`${recipe.title}`);
console.log(`Serves: ${recipe.servings}`);
console.log(`Ingredients: ${recipe.ingredients}`);

for(var i=0; i<recipe.ingredients.length; i++){
    console.log(`${recipe.ingredients[i]}`);
};

// The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the 
// title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so:
//  "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. 
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, 
// log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// var books={
//     title: "Harry Potter and the Sorcerers Stone",
//     author: "J.K. Rowling",
//     alreadyRead: true,

// };
// {
//     title: "The Handmaids Tale",
//     author: "Margaret Atwood",
//     areadyRead: false,
// };
// {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     alreadyRead: true,
// };
// {
//     title: "The Hobbit",
//     author: "J.R. Tolkien",
//     alreadyRead: false,
// };

// for (i=0; i<books.length; i++){
//     var book= books [i];
//     var bookInfo= book.title + ' by ' + book.author;
//     if(book.alreadyRead){
//         document.write(' You read ' + bookInfo);
//     }
//     else{
//         document.write(' you still need to check out ' + bookInfo + '<br>');
//     }
// }



var tommyBird= new Object();{
  tommyBird.age=38;
  tommyBird.color= 'white';
  tommyBird.likes= ['food', 'sun'];
  tommyBird.birthday= {"month": 7, "day": 17, year: 1983}
}

var mommyBird= new Object();{
    mommyBird.age=30;
    mommyBird.color="black";
    mommyBird.likes=["food", "fun"];
}
function describeBird(bird) {
    console.log("This bird is " + bird.age + " years old with " + bird.color + " feathers.");
  }
  
  describeBird(tommyBird);
  describeBird(mommyBird);
  
//constructor function
function Movie(title, year, genre, cast){
    this.title= title;
    this.year= year;
    this.genre= genre;
    this.cast= [cast];
}
//method on the object//function in an object
Movie.prototype.read= function(){
    document.getElementById("movie1").innerHTML=
    ("Title:" + " " + this.title +  '<br>' + 
    "Year: " + this.year + "<br>" + 
    "Genre:"  + this.genre + "<br>" +
    "Actors: " + this.cast)

    document.getElementById("movie2").innerHTML=
    ("Title:" + " " + this.title +  '<br>' + 
    "Year: " + this.year + "<br>" + 
    "Genre:"  + this.genre + "<br>" +
    "Actors: " + this.cast)

    document.getElementById("movie3").innerHTML=
    ("Title:" + " " + this.title +  '<br>' + 
    "Year: " + this.year + "<br>" + 
    "Genre:"  + this.genre + "<br>" +
    "Actors: " + this.cast)
}

//initiate a new object
var movie1=  new Movie("The Color Purple", 1982, " Drama", ["Whoopi Goldberg", " Oprah Winfrey"]);
// var movie2= new Movie("Best in Show", 2000, "Comedy", ["Eugene Levy", "Catherine O'Hara", "Christopher Guest"]);
// var movie3= new Movie("Tommy Boy", 1995, "Comedy", ["Chris Farley", "David Spade"]);
movie1.read();

//new constructor fav artist
function Artist(name, genre, lastAlbum, song, bandMembers){
    this.name=name;
    this.genre=genre;
    this.lastAlbum=lastAlbum;
    this.song=song;
    this.bandMembers=[bandMembers];


}
Artist.prototype.read= function(){
    document.getElementById("phish").innerHTML=
    ("Band Name:" + " " + this.name +  '<br>' + 
    "They Play " + this.genre + " music" + "<br>" + 
    "Their last album was"  + this.lastAlbum + "<br>" +
    "My favorite song is " + this.song + "<br>" +
    "The band members names are" + this.bandMembers);
};
var phish= new Artist("Phish", " Rock", " Sigma Oasis", "Frankenstein", [" trey", " mike", " page", " jon"]);
phish.read();




var caddy ={
    make: "Cadillac",
    model: "XT4",
    year: 2020,
    available: true,
    description: "Newest XT lineup from Cadillac",
}
function display(){
    var place =document.getElementById("submit");
    
   


for (value in caddy){
    place.innerHTML = "Make: " + caddy.make + '<br>' +
    "Model: " + caddy.model + "<br>" +
    "Year: " + caddy.year + "<br>" +
    "About: " + caddy.description;

}
};

// function clear1(){
//     var place = document.getElementById("submit1").reset();
    
// };
   

// function toggleText(){
//     var x = document.getElementById("Myid");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


//create an array that stores 2 objects
//current pet
//past pet

var twiggy={
    name: "Twiggy",
    age: "2 months",
    type:"dog",
    color:"brown and white",
    alive:true,
    friendly:true
};

var russell={
    name:"Russell",
    age:"14 years",
    type:"dog",
    color:"brown",
    alive:false,
    friendly:true
};
//set up a method to output my object
function describePet(pet){
    console.log(`This dog is ${pet.age} old. My pet is named ${pet.name}. Is she friendly? ${pet.friendly}`)
}
describePet(twiggy);
describePet(russell);