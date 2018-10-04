//  Any snippet of code can have a function wrapped around it which hides any function or variable declaration from outer scope.

var a = 2;

function foo() {
  var a = 3;
  console.log(a); // 3
}

foo();

console.log(a); // 2

/*  we declared a named funciton 'foo()' which pollutes the global scope (foo remains a part of global scope until something else changes it...).

We also explicitly called the function by name so that it executes.

Better solution provided by JS:  */

var a = 2;
(function bar() {
  var a = 3;
  console.log(a); //3
})(); // bar is in parens then ended with (); executes immediately.

console.log(a); // 2


//  This notation (foo() {..} )(); is called a 'function-expression' (vs. function declaration).

//  Function expression is not bound in (and thus not polluting) the enclosing scope.  Note this also means it cannot be called again from outside the parens.


//  Anonymous vs. Named

// funciton expressions are often callback parameters:

setTimeout(() => {
  console.log("I waited 1 second!!");
}, 1000); // Anonymous function expression (anonymous function declaration is illegal grammar).

/* Anonymous functions are quick and easy; several drawbacks:

1.  No useful name to display in stack trace (makes debug more difficult)
2.  If the function needs to refer to itself for recursion, 'arguments.callee' (deprecated) is required.  Or when an event handler wants to unbind itself after execution.
3.  Code is less readable/understandable.  Semantic function names are an effective form of documentation. 

Inline function expressions are useful; having a name doesn't detract; no real downsides.  */

setTimeout(function timeoutHandler() {
  console.log("I waited 1 second!!!  Aren't I awesome ?");
}, 1000);

//  Invoking immediately

var a = 2;
(function foo() {
  var a = 3;
  console.log(a); // 3
})(); //  Immediately Invoked Function Expression (IIFE) - very common pattern

console.log(a); // 2

//  IIFEs can also have (function () { .. } ());  - stylistic choice, equivalent result.


undefined = true;

(function IIFE(undefined) {
  var a;
  if (a === undefined) {
    console.log('I love undefined...');
  }
})();

//  Side note: Interesting...  'I love undefined...' outputted to the console BEFORE the setTimeouts (due to asynchronous execution I suspect).  Also noted that both setTimeouts outputted after the same 1 second delay (did not wait a second second :D ).


// Variation of IIFE - function to execute is given after the invocation.  
// This pattern used in the Universal Module Definition project.  More verbose...

var k = 2;
(function IIFE(def) {
  def(window);
})(function def(global) { // note the second function is expressed as a parameter to the first function.
  var k = 3;
  console.log(k); // 3
  console.log(global.k); // 2
});