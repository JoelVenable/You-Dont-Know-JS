//  this is the most confused mechanism in Javascript.  Special keyword that is automatically defined in the scope of every function.

//  What exactly 'this' refers to is often confused...

//  How and why is it used?

function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);

}

var me = {
  name: "Kyle"
};

var you = {
  name: "Reader"
};
/*
identify.call(me); // KYLE
identify.call(you); // READER

speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER

// Why?  So that 'identify()' and 'speak()' can be reused against multiple context (me and you) rather than needing a separate function for each object.

// Another way to do it, without 'this':  */

function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
}

identify(you);
speak(me);

// 'this' provides a more elegant way of passing along the object reference.  

// Common misconceptions:  

// 'this' does NOT refer to the function itself (which might seem logical).  

// Devs new to JS often think referencing a function as an object lets you store state between function calls.  There are other patterns which provide better means of this.

// 'this' does NOT let a function reference itself:

function foo(num) {
  console.log("foo: " + num);
  // keep track of how many times called...
  this.count++;
}

foo.count = 0;

var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}

console.log(foo.count); // 0 -- ??
console.log(count);

// foo.count remains at 0 even though the function was clearly called four times.  "too literal" interpretation of what 'this' means.

// When code executes 'foo.count = 0' it is adding that property, however 'this' wasn't pointing to the same container at all.  

// If I was incrementing a 'count' but it wasn't what I expected, what was I actually doing???

// Above code created a global variable 'count' with value NaN.  

// Instead of taking the time to understand 'this' many developers do that:
function boo(num) {
  console.log('boo: ' + num);
  // keep track of how many times 'boo' called
  data.count++;
}

var data = {
  count: 0
};

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    boo(i);
  }
}

console.log(data.count);

// This approach "solves" the problem by ignoring the real one: lack of understanding 'this'

// To reference a function from inside itself, 'this' is typically insufficient.  Use a lexical identifier that points at it:

function baz() {
  baz.count = 4; // refers to itself...
}

setTimeout(function () {
  // anonymous function (no name), cannot refer to itself
}, 10);

// In the first (named) function, 'foo' can be used to refer to the function from inside itself.

// In the second example, 'setTimeout()' has no name (anonymous), so there's no way to refer back to itself.

// 'arguments.callee' (deprecated)also points back to the function object, it's the only way to do this from an anonymous function (another reason not to use anonymous functions!).

// Another solution:

function bar(num) {
  console.log('bar: ' + num);
  // keep track...
  bar.count++;
}

bar.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    bar(i);
  }
}
console.log(bar.count);

// This approach also sidesteps understanding 'this' and relies on lexical scoping of 'foo'

// Here's how to use 'this' in this example:

function beeZ(num) {
  console.log("beeZ: " + num);
  this.count++;
}

beeZ.count = 0;
var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    // using 'call()' we ensure 'this' points at the function itself:
    beeZ.call(beeZ, i);
  }
}

console.log(beeZ.count); // 4