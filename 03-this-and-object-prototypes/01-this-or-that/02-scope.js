// Misconception #2 about 'this' is that it refers to the function's scope.  

// There is some truth to this, but it's misguided.

// 'this' does not refer to lexical scope.  Internally, scope is like an object with properties for the available identifiers.  The scope "object" is not accessible to JS code; it's a part of the engine implementation.

// The following code attempts (and fails) to access lexical scope via 'this':

function foo() {
  var a = 2;
  this.bar();
  }

  function bar() {
    console.log(this.a);
  }

foo(); // undefined -- in my case using node to run the code results in an error because 'this.bar' is not a function.  

//The natural way would've been something more like this:

function foo() {
  var a = 2;
  bar(2);
}

function bar(text) {
  console.log(text);
}

foo();