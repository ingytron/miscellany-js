function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}


function destroyer(arr) {
  var args.splice(0,1); 
  return arr.filter(function(element)) {
      return args.indexOf(element) === -1;
  });
}
  
console.log(destroyed);

//  var destroyers = arr.filter(badguy)
//  var badguy =  {
      

  
//console.log(destroyed);
console.log(arr, destroy, smash);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);




function destroyer(arr) {
  // Remove all the values
  var destroyers = arr.filter(function(baddies) {
    return 
  })

  return arr;
  var baddies = arr.
arr.index[1,2]
   if (baddies in destroyer)
    array.remove(i)


var baddies
  for (i in arr) { 
  if (arr(i)) === 
}



function destroyer(arr) {
  arr.split(',');
  console.log(arr);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);








var filtered = workItems.filter(function(element) {
   // Create an array using `.split()` method
   var cats = element.category.split(' ');

   // Filter the returned array based on specified filters
   // If the length of the returned filtered array is equal to
   // length of the filters array the element should be returned  
   return cats.filter(function(cat) {
       return filtersArray.indexOf(cat) > -1;
   }).length === filtersArray.length;
});


}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // Those are arguments, not an array!! (phew)








function where(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    // return a Boolean value for `filter` method
    return srcKeys.every(function (key) {
      // reduce to Boolean value to be returned for `every` method
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}

You can pass any number of arguments to this function, and it creates a list using each argument as an item in the list.

// returns "red, orange, blue"
myConcat(", ", "red", "orange", "blue");


// Array Remove - By John Resig (MIT Licensed) from http://ejohn.org/blog/javascript-array-remove/
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

//and here are some examples of how it could be used:

// Remove the second item from the array
array.remove(1);
// Remove the second-to-last item from the array
array.remove(-2);
// Remove the second and third items from the array
array.remove(1,2);
// Remove the last and second-to-last items from the array
array.remove(-2,-1);



function destroyer(arr) {
  var args = Array.slice(arguments);
  // Remove all the values
  for (i=0; i >= arguments.length; i += 1) 
    if (args[i] == arr[i])



  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);





arguments[0]
arguments[1]
arguments[2]

var args = Array.prototype.slice.call(arguments);

var args = Array.slice(arguments);




arr.indexOf( value )




// this will fix old browsers
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(value) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return i;
      }
    }

    return -1;
  }
}

// example
if ([1, 2, 3].indexOf(2) != -1) {
  // yay!
}