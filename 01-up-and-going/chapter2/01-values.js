/*  JavaScript has typed VALUES, not typed VARIABLES.  Built-in types are available:
   * string
   * number
   * boolean
   * null and undefined
   * object
   * symbol (new for ES6)
  
  'typeof' operator examines the value and tells what type it is.

  */

function logType(val) {
  console.log(typeof val);
}

//  the 'typeof' operator returns the type of the VALUE currently in 'a'; the variable is simply a container.

var a;
logType(a);

a = "hello world";
logType(a);

a = 42;
logType(a);

logType(a.toString());

a = true;
logType(a);

a = null;
logType(a); // object - weird JS bug

a = undefined;
logType(a);

a = {
  b: "c"
};
logType(a);