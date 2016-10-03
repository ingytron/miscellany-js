function repeat(str, num) {
  // repeat after me

  if (num <= 0){
  	return '';
  }
  var newStr = str;
  for (i = 1; i < num; i += 1) {
    newStr = newStr + str;
  }
  console.log(newStr);
  //return newStr;
}

repeat('abc', 3);