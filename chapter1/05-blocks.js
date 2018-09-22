var amount = 99.99;

// a general block  (a logical grouping of code, using curly brackets {})

{
  amount *= 2;
  console.log(amount);
}

// control block (attached to 'if')
amount = 99.99;


if (amount > 10) {
  amount *= 2;
  console.log(amount);
}

// note the block does not need a semicolon for closure.