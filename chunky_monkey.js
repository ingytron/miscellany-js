function chunk (array, length) { 

  var chunkD = [];
    i = 0;
    arrLength = array.length;

  while (i < arrLength) {
      chunkD.push(array.slice(i, i += length));
  }

  return chunkD;
}

chunk(['a', 'b', 'c', 'd'], 2);