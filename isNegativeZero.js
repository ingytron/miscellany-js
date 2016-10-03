function isNegativeZero(x) {
  if (isNaN(x)) {
    return false;
  } 
  else if (typeof x !== 'number') {
  return false;
  }
  else if (1/x < 0) {
      return true;
      }
  return false;
}
isNegativeZero(-0);