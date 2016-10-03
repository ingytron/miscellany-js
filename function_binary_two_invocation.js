//Write a function that takes a binary function, and makes it callable with two invocations

function applyf(binary) {
	return function (x) {
	    return function (y) { 
	        return binary(x, y);
	    };
	};
}

addf = applyf(add);
addf(3)(4) // 7
addf(mul) (5)(6); // 30