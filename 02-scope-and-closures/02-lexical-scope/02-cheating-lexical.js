//  How is it possible to cheat the lexical scope?

//  These methods are FROWNED on, most importantly because they lead to POOR PERFORMANCE.

//  eval

//  The 'eval' function takes a string as argument and treats the contents of the string as authored code.

//  IOW, you can generate code programatticaly and pretending it was authored code all along.

//  Subsequent lines of code after 'eval' has executed will not know previous code was dynamically interpreted and modified the lexical scope environment.

function foo(str, a) {
  eval(str); // cheating!!!
  console.log(a, b);
}

var b = 2;
foo('var b = 3;', 1);

/*  The 'var b = 3;' string is treated as code that was there all along.  

Because the code declares a new variable inside of 'foo' it modifies the lexical scope and thus the global 'b' is shadowed.

//  Note that 'eval' was used to pass a fixed literal for simplicity's sake, however it is normally used for dynamically generated code.


In strict mode, 'eval' contains its own lexical scope which means declarations made inside the 'eval' does not actually modify the enclosing scope: */

function bar(str) {
  "use strict";
  eval(str);
  // console.log(a); // ReferenceError: a is not defined
}

bar("var a = 2");

