//  Functions are primary mechanism of scope in JS.

function foo() {
  //  ..
}

// foo() is just a variable in the outer scope that's given a reference to the function declared.  The 'function' is itself a value.

var foo = function () { // anonymous function (has no name)
  // ..
};

var x = function bar() {
  // ..
};


//  Immediately Invoked Function Expressions (IIFEs)

//  In previous example, neither function is executed.  There's another way to execute a function expression (IIFE):

(function IIFE() {
  console.log("Hello!");

})();

//  The outer parens around the (function IIFE() {..}()) is nuance of JS grammar.  The final ()  on the end is what actually executes the function.

//  IIFEs are often used to declare variables that won't affect the surrounding code outside the IIFE:

var a = 42;

(function IIFE() {
  var a = 10;
  console.log(a); // 10
})();

console.log(a); // 42

// IIFEs can also have return values:

var x = (function IIFE() {
  return 42;
})();

console.log(x); // 42