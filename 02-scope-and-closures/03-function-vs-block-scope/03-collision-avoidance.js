//  Another benefit of hiding variables and functions inside a scope is to avoid collision (two different identifiers with same name but different intended use).

function foo() {
  function bar(a) {
    i = 3;
    console.log(a + i);
  }

  for (var i = 0; i < 10; i++) {
    bar(i * 2); // infinite loop!!!  'bar' resets i = 3 each iteration.
  }
}

//foo();  // comment to move on...

//  Global namespaces

//  Variable collision most likely in global scope.  Multiple libraries loaded can collide if they don't properly hide internal functions and variables.

// Libraries will typically use a single variable in global scope, which is then used as a namespace for that library ('$' for JQuery).

var myCoolLibrary = {
  awesome: "stuff",
  doSomething: function () {
    //  changing the world... 
  }
  doAnotherThing: function () {
    //  Am I awesome yet??
  }
};


//  Module management

//  Module approach uses dependency managers.  Libraries imported are not added to global scope, but are imported into another scope through the manager's mechanisms.

//  Module Managers are not 'magic'; they simply use the lexical scoping rules to containerize the libraries into private scopes to prevent collision.

//  It is possible to code yourself to achieve the same end result as a manager without needing to use them.