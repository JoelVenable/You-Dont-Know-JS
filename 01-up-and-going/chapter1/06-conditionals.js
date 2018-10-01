var bankBalance = 302.13;
var amount = 99.99;


// if statement requres a statement that results in a boolean.  Block is only executed if 'true'.
if (amount < bankBalance) {
  console.log("I want to buy this phone!!!");
}

const ACCESSORY_PRICE = 9.99;

amount *= 2;

//can we afford the accessory?

if (amount < bankBalance) {
  console.log("I'll take the accessory!");
  amount += ACCESSORY_PRICE;
}
//  if the statement evaluates to false
else {
  console.log("No, thanks.");
}