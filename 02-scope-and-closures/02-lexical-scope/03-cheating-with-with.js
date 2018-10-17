// 'with' keyword is now deprecated.  Multiple valid ways for 'with' to be explained.  

var obj = {
  a: 1,
  b: 2,
  c: 3
}

//tedious way...
obj.a = 2;
obj.b = 3;
obj.c = 4;

//shorthand...
with(obj) {
  a = 3;
  b = 4;
  c = 5;
}

// second example

function foo(obj) {
  with(obj) {
    a = 2;
  }
}

var o1 = {
  a: 3
};

var o2 = {
  b: 3
};

foo(o1);      // reassigned o1.a to 2
console.log(o1.a);  // 2

foo(o2);  // o2.a did not exist, and is not created by 'with(obj)'!
console.log(o2.a);  // undefined
console.log(a);  // 2 - leaked global variable by the 'with' function

// eval can modify existing lexical scope
// with creates a new lexical scope out of thin air

// scope declared by 'with' statement when passed o1 was o1.  scope had an identifier which corresponds to o1.a
// when we used o2 it had no 'a' identifier, so normal rules of LHS lookup is followed, so an auto global variable was created.

// 'with' is outright disallowed when using strict mode. 
// various forms of indirect or unsafe 'eval' use is disallowed

