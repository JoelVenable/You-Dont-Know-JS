/* Functions are most common unit of scope.  Others are possible and lead to cleaner, easier to maintain code.

Example of block scope: */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//  'i' is declared in the head with the intent of it being scoped to the 'for' loop.  However it is actually scoped to the enclosing function.

var foo = true;

if (foo) {
  var bar = foo * 2;
  bar = function something(bar) {};
  console.log(bar);
}

// In this example 'bar' is only used in context of the 'if' statement, however 'if' is not a scoping statement. 'bar' is actually scoped for the enclosing scope (in this case global).

// "Fake" scoping - done for stylistic reasons and relies on author (self) enforcement to not accidentally use it elsewhere.

//for (var i = 0; i < 10; i++) {
//  console.log(i);
//}

// In this case 'i' is polluting the enclosing scope.

// Good developers use scope as a check to prevent accidental reuse of variables outside their intended purpose.  Block-scoping 'i' would make it available ONLY for the 'for' loop.

//  try / catch  - little known from ES3: Variable declared in 'catch' is block-scoped.

try {
  undefined(); // illegal operation
} catch (err) {
  console.log(err);
} // 'err' is scoped to the 'catch' block.

//console.log(err);  // ReferenceError 'err' is not defined

// note that some linters complain if 2+ catch clauses in the same scope have the same 'err' identifier, even though it works properly.

// LET

// 'let' is new in ES6, and scopes the variable defined to the block.  

var foo = true;

for (let i = 0; i < 10; i++) {
  console.log(i);

}

// console.log(i); // ReferenceError


// Arbitrary blocks for 'let' to bind can be created simply with '{}' anywhere.

// Note that 'let' does odd things with hoisting:

{
  //console.log(whoops);  // ReferenceError -- whoops does not get hoisted.
  let whoops = 2;
}

/* Garbage collection


function process(data) {
  // amazing... 
}

var someReallyBigData = {};

process(someReallyBigData);

var btn = document.getElementById("my_btn");

btn.addEventListener("click", function click(evt) {
  console.log("button clicked");
}, false);

'click' doesn't need 'someReallyBigData' at all.  However the JS engine will have to keep the structure around since 'click' has closure over the scope.  Hence: 

{
  let someReallyBigData = {};
  process(someReallyBigData);
}

This frees up memory and also makes clear the purpose of the variable.



'let' loops:  */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//console.log(i); // ReferenceError

//  'let' binds 'i' to the for loop body, and RE-BINDs it to each iteration of the loop.  

//  Because 'let' binds to an arbitrary block rather than function scope, there can be hidden 'gotchas' where existing code has a hidden reliance on function-scoped vars, and replacing 'var' with 'let' may require refactoring other code.

var foo = true,
  baz = 10;

if (foo) {
  var bar = 3;
  if (baz > bar) {
    console.log(baz);
  }
}

// can be refactored to...

var foo = true,
  baz = 10;
if (foo) {
  var bar = 3;
}

if (baz > bar) {
  console.log(baz);
}

// but if using block-scoped variables...

var foo = true,
  baz = 10;
if (foo) {
  let bar = 3;
  if (baz > bar) { // don't forget 'bar' when moving
    console.log(baz);
  }
}

// const

// ES6 introduces 'const' which is a block scoped variable with a fixed value (constant, as the name implies).  Any attempt to change the value later produces an error.

var foo = true;
if (foo) {
  var a = 2;
  const b = 3; // block scoped to containing 'if'
  a = 3;
  b = 4; //  TypeError: Assignment to constant variable
}

console.log(a); // 3
console.log(b); // ReferenceError