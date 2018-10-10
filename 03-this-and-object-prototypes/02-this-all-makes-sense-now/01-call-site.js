// 'this' is a binding made for each function invocation, based on how the function is called.

// Call-site: the location in code where a function is CALLED (not where it's declared).

// Finding the call site is generally: go locate where a function is called from, but it's not always that easy (certain patterns can obscure the true call site).

// call-stack (stack of functions called to get us to the current moment in execution).  Call-site is in the invocation before the currently executing function.

function baz() {
  // call-stack is 'baz' so our call-site is the global scope
  console.log('baz');
  bar();  // call site for 'bar'
}

function bar() {
  // call stack is 'baz' -> 'bar' so our call site is in 'baz'
  console.log('bar');
  foo(); // call site for 'foo' 
}

function foo() {
  // call stack is 'baz' -> 'bar' -> 'foo'
  // so call site is 'bar'
  console.log('foo');
}

baz(); // call site for 'baz'

//  The actual call site from the call stack is the only thing that matters for 'this' binding.

//  The call stack is the chain of function calls in order (painstaking and error-prone), or by using a browser debugging tool.  

// You could set a breakpoint for the first line of the 'foo' function or simply inserted the 'debugger;' statement on the first line.  Find the second item from the top and that will indicate the real call site.

