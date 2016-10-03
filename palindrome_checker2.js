function palindrome(str) {
  // Good luck!
  var re = new RegExp(/[\s]+/, "g");
  str = str.replace(re, "");
  return str === str.split("").reverse().join("");

}


palindrome("ey e");