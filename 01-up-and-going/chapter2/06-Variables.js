// Variable names must be valid identifiers, and cannot use any reserved words.
// Rules become complex when dealing with Unicode nontraditional characters.
// Identifiers must start with a-z, A-Z, $, or _. It can then contain any of those plus numerals 0-9.
// The same rules apply to property names, although the reserved words rule is relaxed.

// Function scopes
// 'var' declares a variable belonging to the current scope, or global scope if outside any function.


// Hoisting
var a = 2;

foo(); // function is called before it is defined, or "hoisted"

function foo() {
  a = 3;
  console.log(a); // 3
  var a; // declaration is "hoisted" to the top of foo.
}

console.log(a); // 2

//  hoisting a variable is not common, and confusing.  hoisting a function is more common, and an accepted practice.



// Nested scoping
//   variables are available anywhere inside the scope and lower/inner scopes.

function foo() {
  var a = 1;

  function bar() {
    var b = 2;

    function baz() {
      var c = 3;
      console.log(a, b, c); // 1 2 3
    }
    baz();
    console.log(a, b); // 1 2

    // 'c' is not available to bar() because it is inside baz()
  }
  bar();
  console.log(a); // 1
  // 'b' is not available to foo() because it is inside bar()
}

foo();

//  If you try to reference a variable in a scope where not available, ReferenceError is thrown.  
//  If you try to set a variable that hasn't been declared, you'll either: 
//    create it in the top level scope (bad), or
//    get an error if "strict mode" has been defined.

function quiz() {
  z = 5; // 'a' is not formally declared, and thus has global scope.
}
quiz();
console.log(z); //auto global variable!!  if 'z' is defined with 'var' above it becomes ReferenceError.


// ES6 additional scoping options with 'let'

function zebra() {
  var a = 1;
  if (a >= 1) {
    let b = 2;
    while (b < 5) {
      let c = b * 2;
      b++;
      console.log(a + c);
    }
  }

  // because of 'let' declaration, 'b' is only available to the 'if' statement, not the entire zebra() function.
  // for the same reason 'c' is scoped to the 'while' loop only.
}

zebra(); // 5 7 9