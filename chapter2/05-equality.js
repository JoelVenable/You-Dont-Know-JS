/* Four equality operators:
    ==  "loose equality"  - performs type coercion
    !=  "loose not equal" - performs type coercion
    === "strict equality" - DOES NOT coerce type
    !== "strict not equal"- DOES NOT coerce type

  */

var a = "42"; //string
var b = 42; //number

console.log(a == b); // true   - type coerced to number
console.log(a === b); // false - coercion not allowed

//  For detailed rules about type coercion see 11.9.3 of ES5 specification.
//  http://www.ecma-international.org/ecma-262/5.1/

/* Rules for when to use which operator to use:
 * If either value COULD BE true or false, avoid == and use ===.
 * If either value could be one of these specific values: 0, "", or [], avoid == and use ===.
 * In all other cases you're safe to use ==.  Not only is it safe, it improves readability.
 */

//  ARRAYS are coerced to strings by joining all values with commas.
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";

//  Note that two arrays with the same contents would be == equal, but they are not.
console.log(a == c); // true
console.log(b == c); // true
console.log(a == b); // false


// INEQUALITY

// The <, >, <=, and >= operators are used for inequality comparison, "relational".

// Typically they are used for numbers, i.e. "3 < 4".
// They can be used for strings, using alphabetic rules.  

var a = 41;
var b = "42";
var c = "43";

console.log(a < b); // true, both values coerced to number
console.log(b < c); // true, but comparison is made lexicographically (alphabetically)

// Gotcha!! - comparing different value types

var a = 42;
var b = "foo";

console.log(a < b); // false
console.log(a > b); // false
console.log(a == b); // false

// All three values evaluate to false because 'b' is converted to NaN.  NaN is neither greater nor less than any other value.

