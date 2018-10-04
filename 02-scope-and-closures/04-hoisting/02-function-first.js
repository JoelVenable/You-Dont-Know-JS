// Function and variable declarations are both hoisted.  

// However a nuance of JS is the order of operations: functions are hoisted first, then variables.

foo(); // 1

var foo;

function foo() {
  console.log(1);
}

foo = function () {
  console.log(2);
};

// is interpreted as:

function foo() {
  console.log(1);
}

foo(); // 1

foo = function () { // note the original function is replace with the new one
  console.log(2);
}

// multiple or duplicate var declarations are ignored, however multiple *function* declarations override previous ones.  Thus:

killerBee();  // Whoopie!!!

function killerBee() {
  console.log(42);
}

var killerBee = 'bebop';

function killerBee() {
  console.log('Whoopie!!!');
}

console.log(killerBee);  // 'bebop'

// This academic discussion highlights why duplicate definitions in the same scope is a bad idea and can produce confusing results.

// Also, function declarations insde normal blocks hoist to the enclosing scope, thus: 

babyBoy(); // 'b'

var a = true;
if (a) {
  function foo() {
    console.log(a); 
  }
} else {
  function foo() {
    console.log(b);
  }
}

// both function declarations are hoisted and thus the 'if ... else' logic  in this example does not actually do anything.

