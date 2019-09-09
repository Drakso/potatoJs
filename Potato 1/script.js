// Types and variables

// 1. There are types in JS but we don't see them
let var1 = 1; // number
let var2 = "Hello"; // string
let var3 = true; // boolean
let var4 = [] // object
let var5 = function(){return 5}; // function
let var6 = undefined; // undefined
let var7 = null; // null
let var8 = NaN; // number
// 2. Everything that has no value or is unkown to javascript is undefined
// 3. Check type of variable: typeof
console.log(typeof(var5));
// 4. undefined means there is something but javascript don't know what it is or there is nothing but it was not intended to be empty
let x; // undefined - we didn't put any value here so javascript doesn't know what it is
// 5. null means that there is nothing but we add the value representing nothing. This is usually used for objects or arrays
let y = null; // null - we specifically tell y that it is nothing
// Example for null and undefined:
// A function that tries to find a user by id
function findUser(id){
    // some code that searches by id
    // we don't return anything if there is no user
}
// The function will return undefined if there is no user, but any other function that does not return anything also returns undefined
// This means that our function and any other function that is empty act the same and we don't know if the function is really returning no ID or is it just broken
// We can't tell the undefined no id and undefined broken function appart. They are the same
// We can't tell if the undefined is our intended undefined or some other problem occured
function findUser(id){
    if(typeof(id) != "number" || isNaN(id)) return null; // check if id is not a number
    // some code that seraches by id
    // if there is no user return null
}
// We return null and when we see null we know there is no user but if we see undefined then there is a problem
// null is an empty object
// Usually when working with ids and numbers we return -1 if not found, the id if found

// functions
// 1. functions can be: 
    // Declared functions - we declare it and then call the name to use it ( can be called multiple times and by name )
    // Annonimous functions - we write it in some spot and it is called when that spot is called ( we can't call it by name except if we put it in a variable, then we can call the variable as a function )
    // Imidiate invokable functions - We write it somewhere and when the code gets there it executes it right away ( we can't keep it in a varaible or call it by name ) 

// sum - name of the function
// n1, n2 - parameters ( variables that get replaced with some values)
// Example of using declared function

// This is called declaration
function sum(n1, n2){
    return n1 + n2;
}

// This is called invocation
sum(2,3);

// Example of using annonimous function
// We declare a calcualtor function
// This function accepts a parameter that should be a function
function calculator(func){
    // When we get the function, we call it whatever it may be and give these parameters ( 2 and 3 )
    return func(2, 3);
}
// function(n1, n2)... is an annonimous function, a declaration that is passed to the func parameter
// The func parameter can then be called as a function with 2 parameters
let result1 = calculator(function (n1, n2){
    return n1 + n2;
});
let result2 = calculator(function(n1, n2){
    return n1 - n2;
})
console.log(result1);
console.log(result2);

// Annonimous functions are used when we give functions to other entities, functions when we want to send logic to be used later
// Arrow function ( this is also annonimous function but a short version )
// Arrow and classic annonimous funcions are basically at the moment declarations
// types of arrow functions
// if no parameters only write (), also if you only have one value or statement you dont write { }
() => 5; // the function does not require any paramters and returns 5
// if we need paramters
(param1, param2) => param1 + param2; // we don't have return because it's only one statement
// if we need more than one statement we use {}
// inside the arrowFunc variable we have a declaration. We can call this varialbe as a function now because there is a function inside it
var arrowFunc = (param1, param2) => {
    if(param1 > param2){
        return "1 is larger"; // when we use { } in arrow functions you must use return
    }else {
        return "1 is not larger";
    }
}

function normalFunc(param1, param2) {
    if(param1 > param2){
        return "1 is larger";
    }else {
        return "1 is not larger";
    }
}
console.log(arrowFunc);
console.log(arrowFunc(1,5));

let result3 = calculator((n1, n2) => n1 + n2);
let result4 = calculator(arrowFunc);

console.log(result4);

// Exercise 1
// Create a function calculator.
// It should accept a function.
// It should call that function with 2 parameters. 
// The parameters should be given by the person that calls the calculator function.
// Call the calculator function with:
    // sum, divide, multiply and subtract functions with the numbers 6 and 3

// IMPORTANT NOTES
// If no return in function, returns undefined
// If there is no property like that it returns undefined
// If there is no method like that it throws an error
// == - Check if two things are the same no matter the type 3 == "3" - true
// === - Check if two trings are the same and of the same type 3 === "3" - false
// Common mistake, people try comparing things with = and not == or ==

// OBJECTS
// Properties keep values ( if there is no property like that it will return undefined )
// Methods keep actions ( if there is no method like that then it will throw an exception )
let object1 = {
    name: "Dragan", // property
    age: 26, // property
    sayHello: function(){ console.log("HELLO!")} // method
}
sayHello(); // this will not work ( this will throw an error )
object1.sayHello // this will not work ( this will not execute, it will return the function it self)
object1.sayHello(); // this will work ( this will actually call the method / function )


// DOM Manipulation
// DOM is in the broser. It is not in javascript.
// DOM is an object with properties and methods from the HTML page
// We can access DOM by selecting by using the document object
// To select from the DOM we use selectors
let vanilaSelect = document.getElementById("main"); // Selects by id, returns ONE object
document.getElementsByClassName("item"); // Selects by class, returns COLLECTION of objects even if it is one
document.getElementsByTagName("ul"); // Selects by tag name, returns COLLECTION of objects even if it is one
document.querySelector("#main"); // select by id, returns ONE object ( the first it finds )
document.querySelector(".item"); // select by class, returns ONE object ( the first it finds ) 
document.querySelector("ul"); // select by tag name, returns ONE object ( the first it finds )
document.querySelectorAll(".item"); // selects by class and returns COLLECTION of objects even if it is one

// ALL OF THE ABOVE RETURN HTMLELEMENT OBJECT

let jquerySelect = $("#main");

console.log(vanilaSelect);
console.log(jquerySelect);

// JQUERY RETURNS A QUERY OBJECT AND INSIDE THERE IS THE HTML OBJECT OF THE ELEMENT
// VANILLA JS RETURNS THE HTML OBJECT DIRECTLY
// Methods and properties from vanilla can't be used in JQuery and vice versa

// Common mistakes:
    // People using jQuery methods on vanilla objects
    // People using vanilla methods on jquery objects
    // People using vanilla methods on COLLECTION of HTML OBJECTS
    // They should select from the collection the first item and then execute methods

// CONVERTING FROM VANILLA TO JQUERY AND VICE VERSA
// From JQUERY to Vanilla
let convertedJavascript1 = jquerySelect.get(); // returns COLLECTION of HTML OBJECT ELEMENTS
let convertedJavascript2 = jquerySelect.get(0); // returns ONE HTML OBJECT ELEMENT ( the first )

// From Vanilla to JQUERY
let convertedJquery = $(vanilaSelect);

// VANILLA VS JQUERY METHODS

vanilaSelect.innerHTML // returns all html from that element
vanilaSelect.innerHTML = "<h1>Hello</h1>"; // rewrites everything to the new html and text
vanilaSelect.innerHTML += "<h1>Hello</h1>"; // it appends it to the end
vanilaSelect.innerText // returns all text from that element ( without html tags )

jquerySelect.text(); // returns all text
jquerySelect.text("new text"); // It rewrites everything with the new text
jquerySelect.html(); // returns all html
jquerySelect.html("<h1>new html</h1>"); // Rewrites everything with new html
jquerySelect.append("new appended text"); // adds new text or html to the end of the element
jquerySelect.append("<h1>new appended html </h1>");
jquerySelect.prepend("text that goes before all content in this element"); // adds new text or html to the front of the element

vanilaSelect.value // Get the value of the element ( ex: input )
vanilaSelect.value = 1 // Changes the value of the element

jquerySelect.val() // gets the value of the element
jquerySelect.val("HELLO") // Changes the value of the element

// EVENT LISTENERS

// Event is an action that someone does in the browser
// These events do nothing unless we catch them
// We cahtch events with event listeners that listen for a particular event

// Vanilla
// We give annonoimous function ( callback function ) for the event listener to execute when a click is done
// addEventListener only works on vanilla selected objects
vanilaSelect.addEventListener("click", function(e){ // this listens only in the selected element
    console.log("clicked");
    console.log(e);
    console.log(e.target); // which element was clicked
});

document.addEventListener("keyup", function(e){ // this listens to everything on the page
    console.log("key pressed");
    console.log(e);
    console.log(e.key); // which key was pressed
})

// JQUERY

jquerySelect.click(function(){
    console.log(clicked);
});



