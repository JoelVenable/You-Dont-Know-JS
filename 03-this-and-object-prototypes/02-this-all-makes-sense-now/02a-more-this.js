//  I'm still struggling with 'this' binding, so I'm referencing a different guide to hopefully learn more thoroughly.  

//  Now following https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262, "Eyeballing 'this'".


// Implicit binding (again)

var myObject = function () {  // this looks like a constructor!
  this.name = 'MyObjectName';
  this.myProperty = 'property';
};

myObject.prototype.doStuff = function (action) {
  console.log(`${this.name} is ${action}!`);
}

var obj = new myObject();

obj.doStuff('awesome');  // should print 'MyObjectName is awesome!'.

console.log(obj.name);


// Explicit binding - when call(), apply(), or bind() are used...

// .call() - pass in 'this' context along with parameters (arguments passed into the function)...

// .call(thisContext, param1, param2, ...)

var runner = { name: 'John', myFavoriteActivity: 'running' };
myObject.prototype.doStuff.call(runner, runner.myFavoriteActivity);

// 'runner' is 'this' and 'runner.myFavoriteActivity' is the 'action' passed into the doStuff prototype method.



// .apply() slightly differs from call() in that parameters must be passed in an array:

// .apply(thisContext, [param1, param2, ...]);




// Default Binding:

// 'this' is the global context when a function is invoked without any other rules.  If not using call(), apply(), or bind(), 'this' is the global object.