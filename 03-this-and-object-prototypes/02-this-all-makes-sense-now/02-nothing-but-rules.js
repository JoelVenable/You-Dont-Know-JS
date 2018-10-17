//  So how does the call site determine 'this' binding?

//  4 rules, and the call site must be inspected to determine which one applies:

//  Default Binding

/*

function foo() {
  console.log(this.a);
}

var a = 2;

foo(); // node does not bind 'this' to the global object, so my result was 'undefined'

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

// function callbacks often *lose* 'this' binding.  Another way 'this' can surprise us is when the function we've passed the callback to *intentionally* changes 'this' binding.  Event handlers in JS libaries are fond of forcing your callback to have a 'this' which points to the DOM element that triggered the event. Can sometimes be useful, and sometimes infuriating.

//  Either way the 'this' is changed unexpectedly, you are not in control of how your callback funciton reference will be executed, so you have no way (yet) of controlling the call-site to give your intended binding.  Until...

// EXPLICIT BINDING

/*  With implicit binding, we had to mutate the object to include a reference on  itself to the function, and use this property function reference to indirectly bind 'this'.

But if you want to force a function call to use a particular object for 'this' binding?

'All' functions in the language have some utilities available via [[Prototype]].  Specifically, functions have 'call()' and 'apply()' methods.  Host environments sometimes provide functions that are special enough that they do not have such functionality.

Both 'call()' and 'apply()' take an object as their first parameter to use for 'this' and then invoke the function with THAT 'this' specified.  Since you are directly saying what you want 'this' to be bound to, we call that explicit binding.



function foo() {
  console.log(this.a);
}
var obj = {
  a: 2
};

foo.call(obj);  // 2

// Invoking 'foo' with explicit binding by 'foo.call()' allows us to force its 'this' to be 'obj'.

// If you pass a simple primitive ('string', 'boolean', or 'number') as 'this' binding, the primitive value is wrapped in its object form ('new String()', 'new Boolean()', or 'new Number()' respectively).  This is referred to as 'boxing'.

// Note with respect to 'this' binding, 'call()' and 'apply()' are identical.  They do behave differently with additional paramenters, but more on that later.

// Unfortunately, explicit binding alonde still doesn't offer solutions to the previously mentioned problem, of a function losing its 'this' binding or having it paved over by a framework...

// HARD BINDING  - a variation of explicit binding...

var bar = function () {
  foo.call(obj);
};

bar();  // 2
setTimeout(bar, 100); // 2

// 'bar' hard binds 'foo's' 'this' to 'obj'
bar.call(global);  // 2

// We create a function bar() which internally, manually calls 'foo.call(obj)' forcibly invoking 'foo' with 'obj' binding for 'this'.  No matter how you later invoke 'bar()' it will always manually invoke 'foo' with 'obj' binding for 'this'.  This binding is both explicit and strong, so we call it hard binding.

// Typical way of wrapping a function with a hard binding creates a pass through of any arguments passed and return values received...

function bully(something) {
  console.log(this.a, something);
  return this.a + something;
}

var beez = function () {
  return bully.apply(obj, arguments);
}

var b = beez(3); // 2 3
console.log(b); // 5

//  Another way -- create a reusable helper:

function apple(something) {
  console.log(this.a, something);
  return this.a + something;
}

//  simple bind helper...
function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
}

var killer = bind(apple, obj);
var c = killer(3); // 2 3
console.log(c);  //5

// Hard binding is a common pattern, so there's a utility built in to ES5: Function.protoype.bind:

function banana(something) {
  console.log(this.a, something);
  return this.a + something;
}

var baz = banana.bind(obj);
var d = baz(3);  // 2 3
console.log(d);  // 5

//  bind() returns a new function that is hard-coded to tall the original function with 'this' binding as you specified.

//  As of ES6, the hard bound function produced by bind() has a '.name' property derived from the original target function.  for example: 'bar = foo.bind()' has a 'bar.name' value of 'bound foo' which is the function call name that should show up in a stack trace.

// API Call contexts

//  Many library functions and built-in functions of JS language and host enviornment provide an optional parameter 'context' which is designed as a workaround for not having to use 'bind()' to ensure callback uses a particular 'this'.

function boris(el) {
  console.log(el, this.id);
}

var obj4 = {
  id: "awesome"
};

// use 'obj' as 'this' for 'foo()' calls
[1, 2, 3].forEach(boris, obj4); // 1 awesome 2 awesome 3 awesome


// 'new' binding

// Fourth and final rule for 'this' binding, requires us to rethink a common misconception about functions and objects in JS.

// In traditional class oriented language, constructors are special methods attached to classes, that when a class is instantiated with a 'new' operator, the constructor is called.  This usually looks like:

// something = new MyClass();

/* JS has a 'new' operator, and the code pattern looks basically identical.  However there really is NO CONNECTION to class oriented functionality implied by 'new' in JS.

 First, let's redefine what a 'constructor' in JS is:  In JS, constructors are **just functions** that happen to be called with the 'new' operator in front of them.  They are not attached to classes, nor are instantiating a class.  They are not even special functions; just regular functions that are hijacked by the use of 'new' in their invocation.

Example: the 'Number()' constructor...

Any old function, including the built-in object functions like 'Number()' can be called with 'new' and that makes the function call a **constructor call**.  Therefore, there's no such thing as a 'constructor function' but rather a constructor call of a function.

When a function is invoked with 'new' (aka. constructor call) the following things are done automatically:

1.  A brand new object is created (aka constructed) out of thin air. 
2.  The newly constructed object is [[Prototype]] linked
3.  The newly constructed object is set to 'this' binding for that function call.
4.  Unless the function returns its own alternate object, the 'new' invoked function call will automatically return the newly constructed object.

Consider: 

function foo(a) {
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a);  // 2

/* 

By calling foo() with 'new' in front of it, we've constructed a new object and set that new object as 'this' for the call of foo().  So 'new' is the final way that a function call's 'this' may be bound.  We'll call this 'new' binding.

So now we've uncovered the 4 rules of 'this' binding in function calls.  All you need to do is find the call-site and inspect it to see which rule applies.  But what about multiple rules?

Default binding is clearly the lowest priority rule, so we'll set that one aside.

How about implicit vs explicit binding?  

function foo() {
  console.log(this.a);
}

var obj1 = {
  a: 2,
  foo: foo
},
  obj2 = {
    a: 3,
    foo: foo
  };

obj1.foo();  // 2
obj2.foo();  // 3

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2

/*   So explicit binding takes precedence over implicit binding, which means you should ask **first** if explicit binding is occurring.  So where does 'new' binding fit in?



function foo(something) {
  this.a = something;
}

var obj1 = {
  foo: foo
},
  obj2 = {};

obj1.foo(2);
console.log(obj1.a);  // 2

obj1.foo(42);
console.log(obj1.a);  // 42

obj1.foo.call(obj2, 3);
console.log(obj2.a);  // 3

var bar = new obj1.foo(4);
console.log(obj1.a);  //42
console.log(bar.a);   //4

//  So new binding takes precedence over implicit binding.  

*/

function boo() {
  var a = 2;
  killer();
}

function killer() {
  console.log(this.a);
}

boo();