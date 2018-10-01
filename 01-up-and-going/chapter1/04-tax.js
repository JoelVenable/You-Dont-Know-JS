/* usage of all caps in a variable implies a constant however the JS language does not enforce this.
  ES2015 adds the 'const' declaration which does prohibit reassignment of the variable.
  Therefore I have deviated from the course guide to use this feature.
*/

const TAX_RATE = 0.08; // 8% sales tax

var amount = 99.99;

amount *= 2;

amount = amount + (amount * TAX_RATE);

console.log(amount); //215.9784
console.log(amount.toFixed(2)); //"215.98"

//  .toFixed performs rounding to the specified number of digits and converts to string.