// Other code patterns that leverage closure:  the MODULE.

function foo() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(" ! "));
  }
}

// Currently no observable closure occurs.  Just the private variables 'something' and 'another', and the functions doSomething() and doAnother() which have lexical scope  (and closure) of the variables.

// Now consider:
/*
function coolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something); 
  }
  function doAnother() {
    console.log(another.join(" ! "));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}


var foo = coolModule();

foo.doSomething();  // cool
foo.doAnother(); // 1 ! 2 ! 3


/*  coolModule() is just a function, but it has to be invoked for there to be a module instance created.

Secondly, the coolModule() function returns an object denoted by { key: value } syntax.

Note the object returned has access to the outer functions, but not the inner variables.  Those are hidden and private.  This module structure is essentially an API.

The object return value is assigned to the outer variable 'foo' which can then be referenced via the API, as in 'foo.doSomething();'

Note that an it is not required to export an actual object literal.  We could just return an inner function directly.  jQuery is a good example of this:  

The 'jQuery' and '$' identifiers are the public API for the jQuery module, but they are just functions which can have properties.

'doSomething()' and 'doAnother()' have closure over the inner scope of the module instance (created when coolModule() was actually invoked.

Two requirements for module function: 

1.  Outer enclosing function that must be invoked at least once (creating a module instance).

2.  Enclosing function must return at least one inner function, so the inner function has closure over the private scope, and thus access to the private state.

An object with a function property alone is not really a module. 

coolModule() can be invoked any number of times, each time creating a new instance.  Variation: when a single instance is desired:  

var foo = (function CoolModule() {
  var something = "Cool";
  var another = [1, 2, 3];
  
  function doSomething() {
    console.log(something);

  }

  function doAnother() {
    console.log(another.join(" ! "));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
})();

foo.doSomething();  // cool
foo.doAnother();  // 1 ! 2 ! 3

// Here we turned the module function into an IIFE.

// Modules are just functions, so they can receive parameters:  

function coolModule(id) {
  function identify() {
    console.log(id);
  }
  return {
    identify: identify
  };
}

var foo1 = coolModule("foo 1");
var foo2 = coolModule("foo 2");

foo1.identify(); // 'foo 1'
foo2.identify(); // 'foo 2'

// Variation of module pattern:  name object returning as public API:  */

var foo = (function CoolModule(id) {
  function change() {
    // modify public API 
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log(id);

  }

  function identify2() {
    console.log(id.toUpperCase());
  }
  var publicAPI = {
    change: change,
    identify: identify1
  }

  return publicAPI;
})("foo module");

foo.identify(); // foo module
foo.change();  
foo.identify(); // FOO MODULE

// Inner reference to public API can modify the module from inside, including adding methods, properties, and changing values.