//  Lexical scope - used by majority of programming languages
//  Dynamic scope - used in bash, perl

//  Dynamic scope is only mentioned to provide contrast.

//  The term 'lexical' comes from the traditional first phase of compilers which is called 'lexing': source code is examined and semantic meaning is assigned.

//  Lexical scope is defined at authoring time, and thus set in stone by the time the lexer parses code.

//  There are some ways to 'cheat' lexical scope (modifying it after lexer has passed by), but these are generally frowned on.

function foo(a) {
  var b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }

  bar(b * 3);
}

foo(2);

// Look-ups

// Structure of scope explains to the engine all the places it needs to look.  

// In the above code snippet, engine executes console.log() and goes looking for 'a' 'b' and 'c'.  It first starts with inner scope of 'bar' and won't find 'a'.  It then goes up a level to the scope of 'foo' and finds 'a' there.  Same thing for 'b'.  But 'c' it does find inside of 'bar'.

//  Had there been another 'c' inside of 'foo' the console.log never would've seen it because it found 'c' inside 'bar' and stopped there.

// Scope lookup STOPS once it finds the first match.  The same identifier (variable name) can be specified at multiple layers of nested scope which is called 'shadowing.'  Regardless of shadowing, scope always starts at the innermost layer and works outwards until it finds the first match, and STOPS.

// Global variables are automatically properties of the global object ('window' in browsers), so it is possible to reference global variables via a property of the global object: 

window.a  // window is not defined in a node.js environment

// This technique gives access to a global variable which would otherwise be shadowed.  

