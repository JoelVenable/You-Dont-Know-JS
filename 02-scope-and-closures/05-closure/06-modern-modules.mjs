/* Module dependency loaders essentially wrap module definition in a 'friendly' API.  Proof of concept:  

var MyModules = (function Manager() {
  var modules = {};

  function define(name, deps, impl) {
    for (let i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name];
  }
  return {
    define: define,
    get: get
  }
})();

//  The above code lays out the functions available to MyModules, 'define' and 'get'

//  modules[name] = impl.apply... is invoking the wrapper function for a module, passing in dependencies, and storing return value.  

//  Define some modules:

MyModules.define("bar", [], function () {
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello
  };

});

MyModules.define("foo", ["bar"], function (bar) {
  var hungry = "hippo";

  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome: awesome
  };
});

// 'bar' and 'foo' have defined functionality available when passed via the 'get' command.  'foo' even calls 'bar' as a dependency:

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");

console.log(bar.hello("hippo")); // let me introduce: hippo

foo.awesome(); // LET ME INTRODUCE: HIPPO


// FUTURE MODULES

// ES6 adds syntax for modules:  files are separate modules.  Modules can both import other modules or specific API parameters, and export their own API members.  

// Function-based modules aren't statically recognized pattern (i.e. defined by JS itself); they are defined by the various frameworks and can also be authored.  You can even modify an existing framework to change the behavior.

// ES6 module APIs are static, and do *NOT* have an inline format, they must be defined in separate files (one file per module).  Modules are synchronously loaded when imported (can be overridden).

//  Thus:

// import 'foo' and 'bar' modules:  
ES5 way (with babel):

const bar = require('./bar');
const foo = require('./foo');


ES6 way (unsupported by node.js):
module bar from 'bar';
module foo from 'foo';

console.log(
  bar.hello('rhino')
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: RHINO   */