//  most JS is written to run in browser-like environments.  Most of your code is not directly controlled by JS.

// The most common non-JS JS you'll encounter is the DOM API:

var e1 = document.getElementById("foo");

// document variable exists as global variable when code is running in a browser.  Special "host" object.  

// getElementById() method looks like normal JS function, but it is an interface for the method provided by the DOM interface.  

// Newer browsers may use JS under the hood but traditional DOMs are implemented in C. 

// Another example:  alert() popups - provided by the browser, not the JS engine itself.

// Console.log is also a browser tool.