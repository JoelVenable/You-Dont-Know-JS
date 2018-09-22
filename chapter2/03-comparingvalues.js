// Comparing Values
// Two main types of comparison -- equality, and inequality
// Results are strictly boolean values, regardless of type comparison.

// Coercion refresher

//  Explicit coercion - you can see the coercion taking place directly in the code.

var a = "42";
var b = Number(a); //  explicit coercion happens here.

console.log(a); // outputs "42"
console.log(b); // outputs 42 (the number)

//  Implicit coercion - The coercion is implied when I write the code.

var c = "42"; // The value is stored as a string.
var d = c * 3; // The value is implicitly coerced to a number during the operation.

console.log(c);
console.log(d);