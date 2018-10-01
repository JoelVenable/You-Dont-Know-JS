numOfCustomers = 3;

// while loops evaluate the conditional before ever executing the code.
while (numOfCustomers > 0) {
  console.log("How may I help you?");

  // do cool stuff for the customer...

  numOfCustomers -= 1;
}

// do loops execute the code once prior to evaluating the conditional the first time.
do {
  console.log("How may I help you?");

  // you're a genius!!

  numOfCustomers -= 1;
} while (numOfCustomers > 0);


// If the conditional evaulates to false, the code will never run in a while loop, while a do loop will run once.



