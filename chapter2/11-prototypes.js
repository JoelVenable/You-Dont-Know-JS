//  When a property is referenced that doesn't exist, JS will use the object's internal prototype reference to find another object to look for the property on.  (fallback)

var foo = {
  a: '42'
};

//create 'bar' and link to 'foo'

var bar = Object.create(foo);
bar.b = "I'm a bar.b girl"

console.log(bar.b);  // "I'm a bar.b girl"
console.log(bar.a);  // 42  (delegated to foo)


//  bar.a doesn't actually exist but because 'bar' is prototype linked to foo, JS falls back to looking for 'a' on the 'foo' object.

//  Prototypes are often used/abused to emulate a fake 'class' mechanism with inheritance.

// behavior delegation - intentionally design linked objects to be able to delegate from one to the other for parts of needed behavior.