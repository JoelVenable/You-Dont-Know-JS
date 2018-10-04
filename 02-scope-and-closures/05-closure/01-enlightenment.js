// Closure is not an opt-in tool, it's everywhere.

// Closure happens as a result of writing lexical scope.

// Closure is when a function is able to remember and access its lexical scope even when the function is executing outside its lexical scope.

function foo() {
  var a = 2;

  function bar() {
    console.log(a); // 2
  }

  bar();
}

//foo();

// nested scope lookup only encompasses PART of closure.

// function 'bar' access to 'a' from outer scope because of lexical scope lookup rules.

// bar() has a closure over the scope of foo()


function foo() {
  var a = 2;

  function bar() {
    console.log(a);
  }

  return bar;
}

var baz = foo();

baz(); // 2 -- closure

// bar() has lexical scope access to the inside of foo().  bar() the function itself is passed as a value.  In this case, we return the function object that 'bar' references.

// When we execute foo() we assign the value (the bar() function) it returned to a variable called 'baz' then when we execute 'baz()' it invokes 'bar()' with a different name.

// In other words, bar() is executed outside its lexical scope (where it wouldn't normally be accessible).

// Normally, the 'garbage collector' (designed to free unused memory) would see that 'foo' is no longer needed; but closure does NOT let that happen.  The inner scope is still in use.

// bar() has a reference to that lexical scope, and that reference is called closure.

// So any time a function is passed as a value to be invoked later, you're witnessing closure in action.

function foo() {
  var a = 2;
  function baz() {
    console.log(a); //2
  }
  bar(baz);
}

function bar(fn) {
  fn();  
}

// baz is passed to bar, and the inner function fn() has access to 'a' (which is in baz's lexical scope but not fn's!!!).



var funnyBiz;

function bunn() {
  var a = 2;
  function baz() {
    console.log(a); 
  }

  funnyBiz = baz;  // assign 'baz' to global variable
}

function billy() {
  funnyBiz();  // closure in action
}

bunn();

billy(); // 2

