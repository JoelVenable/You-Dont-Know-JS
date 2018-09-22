// functions can be used for reusing code (don't repeat yourself!!), or can be used simply to organize code into logical blocks.

const TAX_RATE = 0.08;

function calculateFinalAmount(amt) {
  amt = amt + (amt * TAX_RATE);

  //return the amount with taxes added.
  return amt;
}

var amount = 99.99;

amount = calculateFinalAmount(amount);

console.log(amount.toFixed(2)); // 107.99