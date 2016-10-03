// This is sometimes called the curry function
// It performs currying or schönfinkelisation.

/**
In mathematics and computer science, currying is the technique of translating the evaluation of a function that takes multiple 
arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument (partial application). 
It was introduced by Moses Schönfinkel and later developed by Haskell Curry.[4][5]

Uncurrying is the dual transformation to currying, and can be seen as a form of defunctionalization. 
It takes a function f(x) which returns another function g(y) as a result, and yields a new function f′(x,y) 
which takes a number of additional parameters and applies them to the function returned by function f. 
The process can be iterated if necessary.
*/

// Write a function that takes a function and an argument, and returns a function that can supply a second argument.

add3 = curry(add, 3);
add3(4)  // 7

curry(mul, 5)(6)  // 30

function curry(func,first) {
	return function (second) { 
        return func(first, second);
    };
}