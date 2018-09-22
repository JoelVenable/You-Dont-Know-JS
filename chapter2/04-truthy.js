//  "Truthy" and "Falsy"

//  Falsy values:

var arr = [
  "",
  0,
  NaN, // undefined number
  null,
  undefined,
  false
];

// Anything that's not "falsy" is "truthy" and evaluates to "true" if coerced to boolean.

// Thus it's important to ensure you're evaluating what you think you are!


for (let i = 0; i < arr.length; i++) {
  const eval = arr[{
    i
  }];
  if (eval) {
    console.log('true');
  } else {
    console.log('false');
  }

}