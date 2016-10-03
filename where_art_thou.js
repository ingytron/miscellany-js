// you have two objects. where objects are key/value pairsvar obj={key:value, key2:value2}. you need to compare the keys 
// in the larger object to the keys of the smaller object. if they are the same. then you need to compare the values. 
// if these are the same return the larger array with only the matching keys/values.


// You may use for loop or the Array.prototype.filter method.
//Check equivalence of Object in collection with Object passed as second parameter to where function.



console.log(Object.keys(collection));
console.log(Object.keys(source));
console.log(collection);
console.log(source);

function blarg(collection, source) {

  slings = collection.prototype.filter(source);
  console.log(slings);
}

blarg([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });)



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


Object.filter = function( obj, predicate) {
    var result = {}, key;
    // ---------------^---- as noted by @CMS, 
    //      always declare variables with the "var" keyword

    for (key in obj) {
        if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
            result[key] = obj[key];
        }
    }

    return result;
};

Object.filter = function( collection, source) {
    var result = {}, key;
    // ---------------^---- as noted by @CMS, 
    //      always declare variables with the "var" keyword

    for (key in collection) {
        if (collection.hasOwnProperty(key) && !source(collection[key])) {
            result[key] = collection[key];
        }
    }

    return result;
};

Array.prototype.filter(source)



function where(collection, source) {
//Look through the array, and return all objects with the same second value(property)

// var contents = collection;
var contents = { first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' };

for (var source in contents) {
  if (Object.hasOwnProperty(source)) {
    while true {
      console.log('Si');
    }

  }
}


  for (i=0; i<collection.length; i+=1) {
      if (Object.hasOwnProperty('last')) {
          console.log(i);
          if (Object.keys('last') === source AND Object.keys('last' !== null)) { 
          console.log("The answer is" + i);
          }
        //return object;
    
      } else {
          console.log(i);
      }
        
      } 
  //return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });


var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}





function where(collection, source) {
//Look through the array, and return all objects with the same second value(property)

// var contents = collection;
var contents = [{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }];

for (var name = 0; name < contents.length; name+=1) {
  if (contents.hasOwnProperty(name)) {
    //console.log(name);
    //console.log(collection);
    //console.log(contents.keys(collection));
    if (Object.keys('last') === source && contents.keys !== null) {
        console.log(contents);
        console.log(name);

  } 
}
  }
  

}   

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
