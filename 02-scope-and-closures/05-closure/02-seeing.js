// closure is all around us...  

function wait(message) {
  setTimeout( function timer() {
    console.log(message);
  }, 1000);
}

// timer() has closure over the function wait()

wait("Hello, closure!");

// JQuery example:

function setupBot(name, selector) {
  $(selector).click(function activator() {
    console.log("Activating: " + name);
  });
}

setupBot("Closure bot 1", "#bot_1");
setupBot("Closure bot 2", "#bot_2");

// Any time a function is passed as a value and pass it around, those functions exercise closure.  Callback functions are a good example.

// IIFEs aren't strictly an observation of closure:

var a = 2;
(function IIFE() {
  console.log(a);
})();

//  This code is not strictly an observation of closure, because the function is not executed outside its lexical scope.  It is invoked in the same scope as it was declared in.  'a' is found via normal lexical scope, not via closure.

//  Though IIFEs are not examples of closure, they do create scope, and it's a common tool used to create scope that can be closed over.

