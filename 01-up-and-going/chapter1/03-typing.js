

/* we declare variables using 'var'
no type required (number, boolean, etc).  
*/

var amount = 99.99;
amount *= 2;

// console.log is performing implicit coercion.
console.log(amount); //199.98

// add '$' and explicitly coerce 'amount' to string. 
// note that the 'amount' variable formerly contained
// a number, and now contains a string.
amount = '$' + String(amount);

console.log(amount); //$199.98