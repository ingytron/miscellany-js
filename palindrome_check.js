/**Please consider skipping the following instructions if you wish to figure it on your own and pair with someone

1) Get rid of everything that isn't a letter, the regex could be str.replace(/[^a-z]/ig, '')
2) Now you have two options, using two pointers (at the beginning of the string and the end) and using a recursive function check if the opposite letters match until you have a zero-length string which returns true (is a palindrome), if at some point the opposite letters don't match, then it's false.
2.1) The second choice is what I chose: create a new string and reverse it using a reverse iteration, then compare the original string (without foreign characters, just letters) and the new reversed string. If they are equal it means true, if not, false.
3) Presto, use it as a function to check any string.


I use the Regex /[\W_]/ig - \W = "Anything not alphanumeric or underscore"

@voodoobettie Well, you're looking to remove anything that is NOT alphanumeric, right? \w matches [a-zA-Z_]
@voodoobettie RegExp(/[\w]+[\s]?[\w]+?/, "g") === /[\w]+[\s]?[\w]+?/g - it's just another way of writing it.
@voodoobettie you are definitely going to need the "g", though, one way or another - that means "global", meaning that it will keep searching after it finds the first match.


  str = "hello"
  
  var rev = new RegExp(/[\W_]/ig);
  str = str.replace(rev, "");
  
  console.log(rev);
  console.log(str);


You've come a long way baby!!!
**/

function palindrome(str) {
  
var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;
var newString = str.replace(myRegExp, "").toLowerCase();

var backwards = str.replace(myRegExp, "").toLowerCase().split("").reverse().join("");

console.log(str);
console.log(newString);
console.log(backwards);

// Need to strip the spaces from the reversed string before comparing to the original



if (newString === backwards) {
  return true;}
else {return false;}
}




//////////////
/**


function palindrome(str) {
  // Good luck!
  backwards = str.split("").reverse().join("");
  if (str === backwards) {
  return true;
}
}


palindrome("eye");



function palindrome(str) {
  // Good luck!
  var re = new RegExp(/[\w]+[\s]?[\w]+?/, "g");
  str = str.replace(re, "");
  return str === str.split("").reverse().join("");
  console.log(str);
}


palindrome("ey e");


function palindrome(str) {
  // Good luck!
  var rev = new RegExp(/[\W_]/ig);
  str = str.replace(rev, "");
  console.log(str);
  str === str.split("").reverse().join("");
  if (str === rev) {
  return true;
}
else {return false;}
}

palindrome("eye");


Helper says:
function palindrome(str) {
  // Good luck!
  var re = new RegExp(/[\s]+/, "g");
  str = str.replace(re, "");
  return str === str.split("").reverse().join("");

}


palindrome("ey e");




function palindrome(str) {
  function reverse(rev) {
	for (var i = rev.length -1, o = ''; i >= 0; o += var[i--]) {}
  return o;
  };

  var backwards = str.split("").rev().join("");
  if (str.rev === backwards) {
  return true;
}
}


palindrome("eye");





function palindrome(str)
{
  str= str.toLowerCase();
   var flag = true;
   var j;
   j = (str.length) -1 ;
   //console.log(j);
   var cnt = j / 2;
   //console.log(cnt);
    for( i = 0; i < cnt+1 ; i++,j-- )
    {
        //console.log("J is => "+j);
        //console.log(str[i] + "<==>" + str[j]);
        if( str[i] != str[j] )
        {
           flag = false;
           break; 
        }


    }
  if( flag ) {
  return true;
  }
  else {
  return false;
  }
}
palindrome('bumtub');

**/