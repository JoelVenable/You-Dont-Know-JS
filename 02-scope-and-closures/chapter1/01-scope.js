/*  Ability to store and retrieve variables is what gives a program 'state'.

Process of compiling code:

  1.  Tokenizing - breaking up string of characters into meaningful (to the language) chunks, called tokens.  'var a = 2;'  is broken into tokens 'var' 'a' '=' '2' ';'.  Whitespace may be a token or not depending on its meaningfulness.

  2.  Parsing - taking an array of tokens and turning it into a tree of nested elements, which represent gramattical structure.  Tree is called Abstract Syntax Tree (AST).

    Tree for 'var a = 2;' might start with 'VariableDeclaration' with a child node 'Identifier' with value of 'a' and another child 'AssignmentExpression' which has a child 'NumericLiteral' with a value of 2.
  
  3.  Code Generation - process of takking the AST and turning it into executable code (machine language, which performs memory reservation and low level tasks).  Varies depending on language and targeted platforms.  


There are steps to optimize performance of execution, including collapsing redundent elements.

JavaScript, unlike other compilers, does not have luxury of having time to optimize since JS is compiled immediately before execution.  To ensure fastest performance JS engines use tricks like lazy compiling and hot re-compiling.


The Conversation

  The Cast of characters:

    1.  Engine - compiles and executes JS code (usually web browser).

    2.  Compiler - Engine's "friend" handles the dirty work of parsing the code.

    3.  Scope - another friend of Engine, collects and maintains look-up list of declared variables and enforces rules as to how they are available to the currently executing code.

To understand scope you need to think like Engine and his friends think, ask questions they ask, and answer them the same way.

'var a = 2;' - Engine sees two distinct statements that Compiler will compile, and Engine will execute.

Compiler processes statement as this:

  1.  Encounters 'var a'.  Compiler asks Scope to see if 'a' exists for that scope.  If so, declaration is ignored.  If not, Compiler asks Scope to declare the new variable 'a' for the scope collection.

  2.  Compiler then producs code for Engine to execute, to handle the 'a = 2' assignment.  The code that Engine runs asks Scope if 'a' exists within the scope.  If so the variable is used; if not Engine looks elsewhere.

If Engine eventually finds a variable it assigns the value of '2'; if not Engine throws an error.

Left side vs right side

LHS = Left Hand Side
RHS = Right Hand Side

RHS lookups get the VALUE of a variable; LHS lookups find the CONTAINER (the variable itself).

*/
var a;

a = 42;

// in this instance 'a' is a LHS statement.  We don't care what the existing value of 'a' is, we want the container as a target for the assignment operation.

console.log(a);

//  in the 'console.log(a)' statement, 'a' is an RHS reference - nothing is assigned to 'a' during this statement, the existing value is being retrieved.

//  LHS/RHS don't necessarily mean the side of the '=' operator.  There are other ways assignments happen so the better way to think is: 
//  LHS - target of the assignment
//  RHS - source of the assignment


function foo(a) {
  console.log(a);
}

foo(2);



/*  Imaginary conversation:

Engine: Hey Scope, I have an RHS reference for foo.Ever heard of it ?

Scope : Why yes, I have. Compiler declared it just a second ago. He's a function. Here you go.

Engine: Great, thanks!OK, I 'm executing foo.

Engine: Hey, Scope, I 've got an LHS reference for a, ever heard of it?

Scope: Why yes, I have.Compiler declared it as a formal parameter to foo just recently.Here you go.

Engine: Helpful as always, Scope.Thanks again.Now, time to assign 2 to a.

Engine: Hey, Scope, sorry to bother you again.I need an RHS look - up
for console.Ever heard of it ?

Scope : No problem, Engine, this is what I do all day.Yes, I 've got console. He's built - in. Here ya go.

Engine: Perfect.Looking up log(..).OK, great, it 's a function.

Engine: Yo, Scope.Can you help me out with an RHS reference to a.I think I remember it, but just want to double - check.

Scope: You 're right, Engine. Same guy, hasn't changed. Here ya go.

Engine: Cool.Passing the value of a, which is 2, into log(..).


*/

function foo(a) {
  var b = a;
  return a + b;
}

var c = foo(2);

// Nested Scope 

function kbb(a) {
  console.log(a + b);  // b cannot be found inside 'kbb' so scope looks in global.
}

var b = 2;

kbb(2);  // 4

//  rules for traversing nested scope:  Engine first looks in the currently executing scope, if it cannot find the variable it goes 'up' a level, and continues up to the global scope.  Once in global, the search stops whether or not the variable is found.

