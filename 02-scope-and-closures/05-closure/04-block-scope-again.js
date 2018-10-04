// We used an IIFE to crate new scope per-iteration.  We actually needed a per-iteration block scope.  We could also use the 'let' variable declaration, uses block-level scope.

// It essentially turns a block into a scope we can close over.  So we can do this:

for (var i = 1; i <= 5; i++) {
  let j = i; // block scope for closure...
  setTimeout(() => {
    console.log(j);
  }, j*1000);
}

//  Works.  But better (what I did before!!):

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i*1000);
}

// Block scoping and closure are working together.

function foo(params) {

}