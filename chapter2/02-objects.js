//  Objects are compound values that can set properties that each hold their own values of any type.
//  Objects are the most useful value types in JS!!

var obj = {
  a: "hello world, I'm an object",
  b: 42,
  c: true
};

console.log("Object accessed via dot notation.");
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log("");

// dot notation and bracket notation are interchangeable.  Dot notation is shorter and easier to read, thus preferred.

console.log("Object accessed via bracket notation.")
console.log(obj["a"]);
console.log(obj["b"]);
console.log(obj["c"]);
console.log("");

//  An array is a subtype of an object value type.  
//  Note that in an array the values are stored in numerically indexed positions, not named properties.

var arr = [
  "hello world, I'm an array",
  42,
  true
]


//  JS always start counting at ZERO!!
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// Arrays are special objects, and have properties, such as length.
console.log(typeof arr);
console.log(arr.length);

// The other subtype of objects are functions.  

function foo() {
  return 42;
}

foo.bar = "hello world";

console.log(typeof foo); // 'function'
console.log(typeof foo()); // 'number' 
console.log(typeof foo.bar); // 'string'



//  Types have built in methods.  

var a = 'hello world';
var b = 3.14159;

console.log(a.length);
console.log(a.toUpperCase());
console.log(b.toFixed(3));