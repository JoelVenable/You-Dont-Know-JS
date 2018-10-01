Goal of book series is to learn ALL parts of JS, not just the "good parts."

Scope and Closures

Fundamental concept of JS.  JS is not an "interpreted language" and therefore not compiled.  JS engine compiles code right before and sometimes during execution.

"Hoisting" is JS variable scope management.  Closure is the single most important concept of JS variable management.  Module pattern is most prevalent organizational pattern in JS.  Deep understanding of this pattern should be high priority.

this and Object Prototypes

Widespread mistruth - 'this' refers to the function in which it appears.  MISTAKE.

'this' is dynamically bound based on how the function is executed.  Four simple rules for 'this' binding.

Object prototype mechanism is a look-up chain for properties, similar to how lexical scope variables are found.  Emulating classes and prototype inheritance is another common misuse of JS.  While the syntax tricks you into thinking classes are present, prototye inheritance is fundamentally opposite in behavior.

Don't ignore the mismatch, it's important to learn and embrace how the prototype system actually works.  Appropriate name is 'behavior delegation.'

Delegation is a different and more powerful design pattern that replaces the need for classes and inheritance.

Types and Grammar

type coercion is highly controversial and causes frustration with developers.

Conventional wisdom is that implicit coercion is a "bad part" of JS and should be avoided.  Some have gone so far as to call it a "flaw" of JS design.  There are even tools out there to scan your code and complain if type coercion occurs.  Chapter 4 fully explains how type coercion works. 

Assertion is that coercion is sensible and learnable, and incredibly useful when understood and used properly.  

Async and performance

Callbacks are insufficient to handle the demands of asynchronous programming (Inversion of Control) trust loss and lack of linear reason-ability.  As a response, ES6 introduces Promises and Generators.

Promises are a time-independent wrapper around a "future value," which lets you reason about and compose them regardless of if the value is ready or not yet. Moreover, they effectively solve the IoC trust issues by routing callbacks through a trustable and composable promise mechanism.

Generators introduce new mode of JS execution, can be paused at 'yield' points and resumed later.  Combination of promises and generators is most effective asynchronous pattern in JS.  

