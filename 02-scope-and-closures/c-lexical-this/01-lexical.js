//  ES6 adds 'arrow function':

var foo = a => {
  console.log(a);
};

foo(2); // 2

// the '=>' is shorthand for the 'function' keyword.  However, there's also something else going on:

var obj = {
  id: "awesome",
  cool: function coolFn() {
    console.log(this.id);
  }
};

var id = "not awesome";
obj.cool(); // awesome
setTimeout(obj.cool, 100); // not awesome

// 'this' binding on the 'cool()' function is lost.  Often, developers use the 'var that = this;' to workaround, but that's a kludge.

//thus: 

var killer = {
  count: 0,
  cool: function coolFn() {
    var self = this;
    if (self.count < 1) {
      setTimeout(() => {
        self.count++;
        console.log("awesome?");
      }, 100);
    }
  }
};

killer.cool(); // awesome?

// 'var that = this' does away with understanding 'this' binding and falls back to lexical scope.

// People don't like writing verbose stuff, so ES6 proposes the idiomatic fix.  

// arrow function declaration introduces "lexical-this"

var bees = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(() => {
        this.count++;
        console.log('awesome!!!');
      }, 100);
    }
  }
};

bees.cool(); // awesome!!!

// arrow functions do not behave like normal functions with 'this' binding.  Normal rules for 'this' binding are discarded and instead take on the value of 'this's lexical enclosing scope.

// However, arrow-function is codifying a common mistake!!

// IOW, why go to the trouble of using 'this' paradigm only to discard it...

// 'this', used correctly:

var bebop = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(function timer() {
        this.count++; // 'this' is bound.
        console.log('awesomer!!!!!!!!!');
      }.bind(this), 100);
    }
  }
};

bebop.cool(); // awesomer!!!!!!!