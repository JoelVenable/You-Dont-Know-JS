Both eval and with cheat the author defined lexical scope by modifying or creating new lexical scope at runtime.

JS engine's performance optimizations are performed at compile time, which depend on statically analyzing the code and predetermining where variable and function declarations are.

But if 'eval' or 'with' are in the code it has to assume its awareness may be invalid, so the performance optimizations are not used.  

In other words, their mere presence means your code will run slower.