/*  Conditionals
  in addition to 'if' there is also 'else if' like so: */

if (a == 2) {
  //do something
} else if (a == 10) {
  // do something else
} else if (a == 20) {
  // do something different
} else {
  // fallback
}

//  More elegant than if.. else if.. is the 'switch statement:

switch (a) {
  case 2:
    // do something
    break;
  case 10:
    // 2
    break;
  case 20:
    // function here
    break;
  default: 
    //fallback
}

//  Note if you don't 'break;' execution will continue into the next case's statements. 
//  This can be useful, as long as you meant to do it!!

switch (a) {
  case 2:
  case 10:
    // some cool stuff
    break;
  case 20:
    // function here
    break;
  default:
    //fallback
}

// note that 'some cool stuff' will execute with both '2' and '10' values.



//  Conditional operator 