function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var slashEm = (howMany + 1);
  for (i = 0; i < howMany; i += 1) {
    arr.shift(0);
  }
  return arr;
}

slasher([1, 2, 3], 2);
