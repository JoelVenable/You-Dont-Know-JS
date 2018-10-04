// most common example to illustrate closure is the 'for' loop:

for (var i = 1; i < 6; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

//  Linters often complain about functions inside loops because **not understanding closure** is so common among developers.

//  If you run the code you get '6' printed out 5 times.

//  Terminating condition is when 'i' is not <= 5; the first time that's the case is when 'i' is 6.  So the output is reflecting the final value of i after the loop terminates.

//  So the for loop runs through all its iterations and creates 5 timers.  Then when each timeout expires the timers lookup the value of 'i' which is already 6!

//  In the above example we are trying to **imply** that each iteration captures its own copy of 'i'.  Though all 5 of the timer()s created are defined separately, they have closure over the same shared global scope.

//  Something about the loop structure tends to confuse us into thinking something more sophisticated is at work.  There's no difference than if each of the 5 timer() callbacks were declared one after the other with no loop at all.

//  So what's missing?  We need more closured scope; specifically one for each iteration of the loop.

//  So how about an IIFE??

for (var i = 1; i <= 5; i++) {
  (function () {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  })();
}

//  Nope, still 6's!

// It's not enough to have more scope if that scope is empty!!  (the IIFE does not have lexical scope of 'i'; 'i' is in global scope).

//  Better:

for (var i = 1; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })();
}

//  Works!

//  Slight variation, slightly more elegant:

for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })(i);
}

//  Works since an IIFE is just a function, we can call it 'j' or 'i' again and it will still work.