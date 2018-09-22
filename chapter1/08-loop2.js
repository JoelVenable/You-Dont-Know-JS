var i = 0;

// a 'while... true' loop would run forever unless stopped.
while (true) {
  //stop the loop??

  if ((i <= 9) === false) {
    break;
  }
  console.log(i);
  i += 1;
}

// 0 1 2 3 4 5 6 7 8 9

// better code semantically...
for (var i = 1; i <= 9; i++) {
  console.log(i);
}

// for loop has three clauses: 
//   init, conditional, and update.