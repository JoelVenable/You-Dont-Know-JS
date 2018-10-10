//  So how does the call site determine 'this' binding?

//  4 rules, and the call site must be inspected to determine which one applies:

//  Default Binding

/*

function foo() {
  console.log(this.a);
}

var a = 2;

foo(); // node references the global object differently, so my result was 'undefined'

//  variables declared in global scope ('var a = 2') are synonymous with global object properties of the same name --  they ARE the same.  

//  Thus when 'foo()' is called 'this.a' resolves to the global 'a' (in browser environments).  

//  I checked Chrome and 'this' when called from inside 'foo' references to the global object 'window'. 

// How do we know the default binding rule applies?  

// In the above snippet, 'foo()' is called with a plain function reference.  None of the other rules will apply so default binding takes effect.

// If strict mode is enabled, the global object is not eligible for default binding, so 'this' is set to 'undefined'.

function foo() {
  "use strict";
  console.log(this.a); // TypeError
  console.log(this); // undefined  (cannot reference global object)
}

var a = 2;
foo();

// Note that even though the overall 'this' binding rules are based on the call site, the global object is only eligible for default binding if the contents of 'foo()' are not running in strict mode; the strict mode state of the call site is irrelevant.

function foo() {
  console.log(this.a);
}
var a = 2;

(function () {
  "use strict";
  foo(); // 2
})();

// Note that mixing strict with 'loose' is generally frowned on.  The entire program should generally be strict or not.  However, if you add a third party library with different strict-ness, this nuance should be noted.

// Implicit binding -- does the call site have a context object (or owning, or containing)

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); // 2  -- This time node works like a browser and also results in 2

//  Note the manner 'foo()' is declared and then later added as a property of obj.  'foo()' the function itself is not really owned by 'obj' and could be called elsewhere.

//  The call site *uses* obj context to reference the function, so 'obj' owns the function reference when it is called.

//  At the point that 'foo()' is called, it's preceded by an object reference to 'obj'.  Implicit binding rule says it is *that* object that is referenced for 'this' binding.

//  Because 'obj' is the 'this' for the 'foo()' call, 'this.a' is synonymous with 'obj.a'.  

//  Only the last level of an object property matters to a call site.  For example:

function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo
};

var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.foo(); // 42

// When an implicitly bound function loses its binding, it falls back to the default binding. Here:

function boo() {
  console.log(this.a);
  console.log(this);
}

var fly = {
  a: 2,
  boo: boo
};

var bee = fly.boo; // function reference, note it is not actually called!

var a = "oops, global"; // 'a' is also property of global object

bee(); // "oops, global"   -- for node, 'circular reference'

// Even though 'bee' appears to be a reference to fly.boo, it's really just another reference to foo itself.  Moreover, the call site is what matters, and the call site is bee() which is an undecorated call and the default (global) binding applies.

// More subtle, common and unexpected way this occurs is with callback functions:

*/
function bees() {
  console.log(this.a);
}

function doBees(fn) {
  // 'fn' is just another reference to 'bees'
  fn(); //  call site
}

var billy = {
  a: 2,
  bees: bees
}

var a = "oops, global"

doBees(billy.bees);  // "oops, global" -- undefined for node

//  Parameter passing is an implicit assignment; since we're passing a function it is an implicit reference assignment so the end result is the same as previous

//  What if the function is built into the language?

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};


var a = "oops, global";

setTimeout(obj.foo, 100);  // "oops, global" or undefined
