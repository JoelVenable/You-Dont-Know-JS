//  Some JS features are newer additions not available in older browsers.  Some newest features haven't been implemented in ANY browsers yet.

// So how do we bring in new features?  Polyfilling/transpiling.

//Polyfilling: Take definition of new feature and create code to implement the same behavior with older browsers.  

//Example:  ES6 defines utility 'Number.isnan()' to provide a check for 'NaN' values.  To polyfill the utility you can use the code whether or not the browser supports it natively:

if (!Number.isNan) {  // checks for native feature support
  Number.isNaN = function isNaN(x) {
    return x !== x;
  };
}

// Not all features can be fully polyfilled.  Sometimes there are small deviations in behavior.  When implementing polyfills yourself you must be careful to ensure you are adhering to spec as strictly as possible.

// Pre-made polyfills are available:
// https://github.com/es-shims/es5-shim
// https://github.com/es-shims/es6-shim




// Transpiling - There is no way to polyfill new syntax added to language (would throw an error in old JS engine)

// Transpilers are tools used to convert code written in newer standards to old JS code equivalents. (transforming + compiling).

// Transpilers are inserted in build process, similar to code linter and minifier.

// So why transpile instead of writing to the older standard?

//  New syntax makes your code more readable/maintainable.
//  If you transpile only for older browsers, but serve newer syntax for modern browsers you take advantage of performance optimizations.
//  Using newer syntax earlier allows robust testing in real world which provides timely feedback to the JS committee.  If issues are found early enough they can be corrected before they become permanent.

//  ES6 adds 'default parameter values' :

function foo(a = 2) {   // default value is 2, but if value passed to function... 
  console.log(a);   
}
foo();  // 2
foo(42);  // 42  <--  The 42 passed to foo() overrides the default value of 2.

//  However this code is invalid pre ES6.  Transpiler converts to this:

function foo() {
  var a = arguments[0] !== (void 0) ? arguments[0] : 2;
  console.log(a);
}

//  'undefined' is the only value that cannot be explicitly passed into a default value parameter

//  Transpilers should now be thought of as part of the JS development process.  New features are added quite rapidly, and if you use a transpiler you'll always be able to take advantage of latest features.

// Best transpilers to use:

// babel - https://babeljs.io
// Traceur - https://github.com/google/traceur-compiler


