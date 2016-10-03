function largestOfFour(arr) {
  // You can do this!
  for (i = 0; i < arr.length; i += 1) {
  	smallest = Math.min(arr[i]);
  	small_list.push(smallest);
  }
  math.min.apply(smallest);

  return sml_arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);





array syntax arr[i]




import from math; // how does this go again?










Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


var max_of_array = Math.max.apply(Math, array);
