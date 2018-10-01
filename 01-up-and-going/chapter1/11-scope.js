// scoping of variables - if a variable is declared inside a function it can only be 
// accessed by that function or any child functions nested inside.

function one() {
  // this 'a' only belongs to the 'one()' function.
  var a = 1;
  return a;
}

function two() {
  //this 'a' only belongs to the 'two()' function.
  var a = 2;
  return a;
}

console.log(one());
console.log(two());


//example of nested scope variables

// "Lexical" scope rules = code in one scope can access variables in or above its scope.
function outer() {
  var a = 1;

  function inner() {
    var b = 2;
    b += a;
    return b;
  }

  console.log(inner()); // 3
  console.log(a); //  1
  // note outer() cannot access inner()'s 'b' variable.
}

outer();