//  'this' Identifier - another commonly misunderstood concept.

//  'this' usually points to an object, but which object it points to depends on how the function was called.

//  'this' does not refer to the function itself (most common misconception).

function foo() {
  console.log(this.bar);
}

var bar = "global";
var obj1 = {
  bar: "obj1",
  foo: foo
}

var obj2 = {
  bar: "obj2"
}

console.log(foo);
console.log(obj1.foo());
console.log(foo.call(obj2));
new foo();

/*
foo() ends up setting 'this' to the global object in non-strict mode.
  In Strict mode 'this' would be undefined, and you'd get ReferenceError.

obj1.foo() sets 'this' to the obj1 object.

foo.call(obj2) sets 'this' to the obj2 object.

new foo() sets 'this' to a brand new empty object.


To understand what 'this' points to, you have to examine how the function was called.

*/