// Type coercion

// 'a' is stored as a string
// 'b' is stored as a number
var a = '42';
var b = Number(a);

// Output shows both as 42
console.log(a);
console.log(b);

// Strict equality shows that they are not equal due to different types.  Evaluates to 'false'.
console.log(a === b);

// Loose equality performs implicit type coercion, and evaluates to 'true'
console.log(a == b);