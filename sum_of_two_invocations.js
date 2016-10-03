//Create a function that adds from two invocations 
// addf(3)(4) //7

function addf(x) {
  return function (y) {
  return x + y;
  };
}

addf(3)(4)