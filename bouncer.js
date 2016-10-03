// Remove the falsey values
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var working = arr;
  function truthMe(value) {
    return Boolean(value) === true; 
  }
return arr.filter(truthMe);
}

bouncer([7, 'ate', '', false, 9]);
