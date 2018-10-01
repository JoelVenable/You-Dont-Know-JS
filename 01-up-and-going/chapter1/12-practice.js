// Practice code #1 
// Write program to calculate total price of phone purchase.  Keep purchasing phones until you run out of money.
// 1.  Calculate the purchase amount, 
//     add in tax,
//     then print out the calculated amount, properly formatted.


const PHONE_PRICE = 99.99;
const ACC_PRICE = 9.99;

var bankBalance = 1274.24;
var phoneCount = 0;
var accCount = 0;

function checkS(val) {
  if (val === 1) {
    return "";
  } else {
    return "s";
  }
}

function addTax(amt) {
  const TAX_RATE = 0.08;
  amt = amt + (amt * TAX_RATE);
  return +amt.toFixed(2);
}

function convertDollar(amt) {
  return "$" + amt.toFixed(2);
}

function checkBalance() {
  console.log("I now have " + convertDollar(bankBalance) + ".");
}

// this function expects the bank balance to be sufficient for purchase.  Test prior to execution.
function buyPhone() {
  console.log("A phone costs " + convertDollar(addTax(PHONE_PRICE)) + ".  I can afford it.");
  bankBalance -= addTax(PHONE_PRICE);
  checkBalance();
  phoneCount++;
  console.log("I now have " + phoneCount + " phone" + checkS(phoneCount) + ".");
}

// this function expects the bank balance to be sufficient for purchase.  Test prior to execution.
function buyAccessory() {
  console.log("I want the accessory. It costs " + convertDollar(addTax(ACC_PRICE)) + ".");
  bankBalance -= addTax(ACC_PRICE);
  checkBalance();
  accCount++;
}



// The while logic tests for available funds prior to executing the buyPhone() or buyAccessory() functions.
while (bankBalance > addTax(PHONE_PRICE)) {
  buyPhone();
  if (bankBalance > addTax(ACC_PRICE)) {
    buyAccessory();
  } else {
    console.log("Dang, can't afford the accessory.  I'll have to borrow someone's charger.");
  }
}

console.log("Dang, I can't afford another phone.");