function truncate(str, num) {
if (str.length > num){
	var snip = str + '...'
	var newString = snip.slice(0,(num - 3));
	console.log(newString)
	return newString + "...";
} else {
	return str;
}

  // Clear out that junk in your trunk
  // return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);