/*  

Traditional way of thinking about functions is they are declared then code is added inside.  The inverse is equally useful:

Take an arbitrary section of code written, and wrap a function around it, which in effect "hides" the code.  

Why is hiding variables and functions useful?

* Principle of Least Privilege (Authority/Exposure) - In designing software i.e. APIs, you should expose only what is minimally necessary and hide everything else.

Principle extends to choice of scope to contain vars and funcs.  If all vars and funcs were in global scope, the "Least" principle would be violated.  */

function doSomething(a) {
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);


}

function doSomethingElse(a) {
  return a - 1;
}

var b;

doSomething(2);

/*  'b' and 'doSomethingElse()' are likely private details of 'doSomething()', and don't need global exposure.  Giving outer scope access may violate assumptions of 'doSomething()' or behave in unintended ways.

Better design of above:  */

function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  var b = a + doSomethingElse(a * 2);
  console.log(b * 3);


}

doSomething(2);

//  In this second snippet, 'b' and 'doSomethingElse()' are not exposed to the global scope.