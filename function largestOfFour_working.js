function largestOfFour(arr) {
  // You can do this!
  for (i = 0; i < arr.length; i += 1) {
  	smallest = Math.min(arr[i]);
  	small_list.push(smallest);
  }
  Math.min.apply(smallest);

  return sml_arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
*/
function largestOfFour(arr) {
    var maxis = [];
    for (i=0; i < arr.length; i += 1) {
        maxis.push(Math.max.apply(Math, arr[i]));
    }
    return maxis;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
/*
You had to put the first argument in the apply method as Math, and then the second argument was the array to be evaluated which you can access by placing the parent array arr and [i] for the current index in the for loop.
Also, don't declare global variables, place maxis inside the function.
*/



array syntax arr[i]

// Here I go again on my own
var maxis = [];
function largestOfFour(arr) {
	for (i=0; i < arr.length; i += 1) {
    	var largest = Math.max.apply( Math, i );
    	maxis.push(largest);
	}
	return maxis;
}

	
forEach (arr, largestOfFour(arr)) 


function largestOfFour(arr) {
    var maxis = [];
    for (i=0; i < arr.length; i += 1) {
        maxis.push(Math.max.apply(Math, arr[i]));
    }
    return maxis;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

You had to put the first argument in the apply method as Math, and then the second argument was the array to be evaluated which you can access by placing the parent array arr and [i] for the current index in the for loop.
Also, don't declare global variables, place maxis inside the function.





function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8






Array.max = function( array ){
    return Math.max.apply( Math, array );
};







Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


var max_of_array = Math.max.apply(Math, array);
