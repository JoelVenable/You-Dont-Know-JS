//  Closure has its own title in the series.  General concept explained for now.

//  Closures are a way to "remember" and continue to access a function's scope (variables) once the function has finished running.

function makeAdder(x) {
  //  'x' is an inner variable
  // inner function 'add()' uses 'x', so it has a closure over it

  function add(y) {
    return y + x;
  };
  return add;
}



//  Now we can execute this function to make new functions:

// plusOne gets a reference to inner 'add()' with closure over 'x'.

var plusOne = makeAdder(1);

var plusTen = makeAdder(10);

console.log(plusOne(3)); // 4

console.log(plusTen(32)); // 42

//  When makeAdder() is called, the inner 'add()' function is returned, that remembers 'x' as 1. 
//  When 'plusOne()' is called, it adds its inner 'y' to the 1 (rememberd by 'x') resulting in 4.


//  Modules - most common usage of closure in JS.  Modules let you define private implementation details (variables or functions) that are hidden from the outside world, as well as a public API that IS accessible.

function User() {
  var username, password;
  function doLogin(user, pw) {
    username = user;
    password = pw;

    // magic here
  }
  var publicAPI = {
    login: doLogin
  };
  return publicAPI;
}

// create a 'User' instance
var fred = User();
fred.login("fred", "passw0rd!");

//  User function holdes outer scope with username and password, with inner function doLogin.  These functions contain private details of the User module that cannot be accessed from the outside world.

//  Note we are not using 'new User()' here even though that is more common.  User() is a function, not a class to be instantiated.  'new' would be inappropriate.

// Executing 'User()' creates an instance of the user module, new scope is created, and thus new copy of the inner variables and functions.

// The inner 'doLogin()' function has a closure over username and password so it will retain access after 'User()' finishes running.