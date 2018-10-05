// Dynamic scope vs lexical scope: 

// Lexical scope is defined at author time (assuming you don't cheat with eval() or 'with').

// Dynamic scope is a cousin of the 'this' identifier, where scope can be determined dynamically at runtime:

function foo() {
  console.log(a);  // 2
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;

bar();

/* lexical scope order of operations:
1.  functions and global variables are declared 
2.  global 'a' is set to 2
3.  bar() runs, creates 'bar.a' and sets its value to 3, then runs foo().
4.  foo() sees global 'a' and outputs '2' to console.

Dynamic scope doesn't concern itself with how and where functions and scopes are declared but rather: 

WHERE THEY ARE CALLED FROM.

So if JS had dynamic scope, the code would theoretically result in '3' because foo() would see bar.a instead of global a.


*/

