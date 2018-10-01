// LHS/RHS revisited - The two types of lookups behave differently in the circumstance where the variable has not yet been declared.  

function foo(a) {
  console.log(a + b); // RHS lookup will not find 'b' because it is not found in the scope.
  b = a;
}

foo(2);  // ReferenceError

//  If a variable is found for RHS lookup but you try to do something that is impossible (execute a non-function, or reference a property on a null value) --> TypeError.  

//  ReferenceError is Scope failure related.
//  TypeError implies Scope resolution was successful but an illegal operation was attempted.