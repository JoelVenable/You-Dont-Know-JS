/*

What makes a new bubble?  Can other structures create scope besides functions?

Typical JS scope is defined by functions; let's first explore function scope and its implications:  */

function foo(a) {
  var b = 2;

  // some chords, oops I mean some code

  function bar() {
    // your great startup idea
  }

  //  I'm 1337

  var c = 3;
}

// scope bubble for foo includes a, b, c, and bar.  All the variables from foo are also available in bar (assuming no shadowing).

// Function scope encourages the idea that all variables belong to the function, and can be used and reused throughout the function.

// Variables existing across entirety of scope can create unexpected pitfalls...