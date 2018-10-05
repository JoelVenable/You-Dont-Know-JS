//  'with' and 'catch' are tiny examples of block scope.

// 'let' finally gives full block scope capability to our code.

// Block scope in pre-ES6 environments:

{
  let a = 2;
  console.log(a); //2
}

//console.log(a);  // ReferenceError

// This works in ES6 environments.  How do we do this pre-ES6?  A. 'Catch'

try {
  throw 2
} catch (a) {
  console.log(a); // 2
}

//console.log(a); // ReferenceError

// try/catch appears to throw an error, but that is just a value of 2, then the variable declartion is in the 'catch(a)' clause.  Basically, it's a hack of the error handling system.

// The point is that tools can transpile ES6 code to work in pre-ES6 environments.  

// Traceur: transpiler from Google which uses try/catch:

{
  try {
    throw undefined;
  } catch (a) {
    a = 2;
    console.log(a); // 2
  }
}

// console.log(a);  // ReferenceError

// Implicit vs Explicit Blocks:

// Alternate form of 'let'  - NOT VALID CODE...

/* Note: auther of book wrote 'let-er', a build step transpiler with the only task of finding 'let statements' and converting them to valid ES6 code.


let(a = 2) {
  console.log(a); // 2
}

// console.log(a);  // ReferenceError  

/*  Instead of hijacking another block, the 'let' statement begins its own with the variable declaration.  It also grammatically forces all the variable declarations to the top. 

let (a = 4, b = 2, c = 15) {
  console.log(a + " " + b + " " + c);
}


/* Why not just use an IIFE to create scope?

1.  try/catch is slower, but it doesn't have to be.  Traceur team has asked the Chrome team to improve try/catch performance.

2.  functions wrapped with IIFEs will change the meaning of some variables, including 'this' 'return' 'break' and 'continue'.  */