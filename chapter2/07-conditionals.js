/*  Conditionals
  in addition to 'if' there is also 'else if' like so: */

if (a == 2) {
  //do something
} else if (a == 10) {
  // do something else
} else if (a == 20) {
  // do something different
} else {
  // fallback
}

//  More elegant than if.. else if.. is the 'switch statement:

switch (a) {
  case 2:
    // do something
    break;
  case 10:
    // 2
    break;
  case 20:
    // function here
    break;
  default:
    //fallback
}

//  Note if you don't 'break;' execution will continue into the next case's statements. 
//  This can be useful, as long as you meant to do it!!

switch (a) {
  case 2:
  case 10:
    // some cool stuff
    break;
  case 20:
    // function here
    break;
  default:
    //fallback
}

// note that 'some cool stuff' will execute with both '2' and '10' values.



//  Conditional operator (terniary operator)
//  Concise form of if...else

var a = 42;

var b = (a > 41) ? "hello" : "world";

/*  similar to:
if (a > 41) {
  b = "hello";
} else {
  b = "world";
}

conditional operator does not have to be used for assignment, but it is most common usage of this format.

*/


// Strict Mode

// Strict mode tightens rules for certain behaviors.  Keeps code to safer set of guidelines.  Also, strict mode makes you rcode more optimizable by the engines.

// Strict mode can be opted in for individual function or entire file depending on the declaration.

function foo() {
  "use strict";

  // this code is strict mode

  function bar() {
    // this code is also strict mode.
  }
}

// this code is not strict mode


// Key difference - auto-global variable declarations are disabled.

function foo() {
  kaz = 1; // 'var' missing, ReferenceError.
}

//foo();

//  Turning on strict mode may induce errors, temptation is to turn off.  Errors on strict mode are indicative of bad coding practices.

// Strict mode represents future direction of language.