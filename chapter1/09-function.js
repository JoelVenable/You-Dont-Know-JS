// functions are named sections of code that can be called by name.

//function printAmount() {
//  console.log(amount.toFixed(2));
//}

//var amount = 99.99;

//printAmount(); // "99.99"

//amount *= 2;

//printAmount(); // "199.98"


// functions can take arguments (parameters) and can also output a value using 'return'.

function printAmount(amt) {
  console.log(amt.toFixed(2));
}

function formatAmount() {
  return "$" + amount.toFixed(2);
}

var amount = 99.99;
printAmount(amount * 2);

amount = formatAmount();
// note scope issues with 'amount' variable.
console.log(amount);