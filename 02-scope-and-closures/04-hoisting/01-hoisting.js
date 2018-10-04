// Chicken or egg...

"use strict"
a = 2;

var a;

console.log(a);

//might expect 'undefined' output since variable is declared after assignment, however the variable declaration is hoisted above the value assignment.

console.log(b);
var b = 3;

// In this example, the variable declaration is hoisted, however the value assignment is not.  Thus this code produces 'undefined' output.

// While you might think of 'var b = 3;' as a single statement, the JS engine parses the statement as:

var c;  // var declaration is "moved" to the top of the code, and processed before anything else (hoisted).

c = 2;  // NOT moved (hoisted).

// Hoisting is also 'per scope':

foo();

function foo() {
  console.log(a); // undefined
  var a = 2;
}

// is actually processed by the engine to read:

function foo() {
  var a;
  console.log(a); // undefined
  a = 2;
}

foo();

// Function declarations are hoisted, however function expressions are not, which the following expression demonstrates:

bob();  //  TypeError (bob is currently a container with 'undefined' contents and thus cannot be executed)

var bob = function bar() { };   