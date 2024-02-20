let classdetail = document.querySelectorAll(".heading");
console.log(classdetail);

let cdetail = document.getElementsByClassName("heading");
console.dir(cdetail);

function myfun(){
    alert("hello");
}

function demo(){
   let x = "function scope"; // can use same variable name in other function
    // as variable declared within a function is deleted after the function ends
    document.getElementById("funscope").innerHTML = x;
}
demo();

// hoisting :JavaScript's default behavior of moving all declarations to the top of the current scope
//JavaScript only hoists declarations, not initializations.
function demo1(){
     x = "function scope using var"; // can use var before declaring it
     document.getElementById("funscope1").innerHTML = x;
    //  var x;
 }
demo1();
var x; //The variable is initialized with undefined until the execution reaches the point of declaration.

//block of code : block can be if, while bolck also
{
   let x= 5; // block scope variable
    document.getElementById("blockscope").innerHTML = x;
    // let x ; // With let and const, you cannot use a variable before it is declared.
    /*unlike var, let and const are not initialized with undefined, and accessing them before their actual declaration 
      results in a ReferenceError.*/
    // This period from the start of the block until the declaration is known as the "temporal dead zone."
}

try
{
 carname = "abc";
 let carname;
}
catch (err){
   // document.getElementById("demo").innerHTML = err;
}

//JavaScript Initializations are Not Hoisted
{
  var x= 6;
  document.getElementById("demo").innerHTML = x+ "  " +y ;
  var y = 5;
}

//use strict :indicate that the code should be executed in "strict mode"
//write "secure" JavaScript.
// {
//     "use strict"
//     console.log(s);
//     s = 55;   
// }

      //this keyword refers to the object
      
      //in object method refers to object
const person = {
 fname : "abc",
 lname :"xyz",
 name : function() {
    result = this.fname + " " + this.lname;
    return result;
 }
}
 person.fname = "def";
 document.getElementById("fullname").innerHTML = person.name();

      //this alone refers to global object which is object window in browser
 let gthis = this;
 //document.getElementById("demo1").innerHTML = gthis;
      //this in a Function (Default)
      //In a function, the global object is the default binding for this --> [object Window]
/* function myfun(){
    return this;
}*/

function calculas(num1,num2,mycallback){
   result = num1 + num2;
   mycallback(result);
}
function display(result){
 document.getElementById("some").innerHTML = result
}

calculas(4,3,display);
      //execute a piece of code after a specified delay
      //setTimeout(function, delay, [arg1, arg2, ...]);
      //JavaScript runs in a single-threaded environment, and setTimeout() is non-blocking.
      //used in :  updating the UI after a delay, delaying network requests, or creating animations
let stop = setTimeout(myfun1,4000);  //myfun1 is callback fun and passed as arg in settimeout
      //give refrence not execute(->())
function myfun1(){
   document.getElementById("demo1").innerHTML = "hello"
}
document.querySelector(".stop").addEventListener('click',function(){
                           clearTimeout(stop);
                           console.log("stopped");
                           })

      //handler : a fun with no name
let timeout = setTimeout(()=>{console.log("delay by 2sec")},2000);
clearTimeout(timeout);

      //setInterval() : repeatedly run a function at fixed time intervals.
      //setInterval(function, interval, [arg1, arg2, ...]);
function myfun2(){
let d = new Date();
//document.getElementById("demo1").innerHTML = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
}
setInterval(myfun2,1000);