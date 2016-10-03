// solutions I was working on for the title_string problem.

// This part is working, now I need to loop it
function titleCase(str) {
	var words = str.replace(myRegExp, "").toLowerCase().split(" ");
	var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;

	console.log (words);
    
    var titled = []; // the array where the titled sentence goes
    
    words[0] = words[0].slice(0,1).toUpperCase() + words[0].slice(1).toLowerCase().push(titled);
    console.log(words[0]); 
    console.log(titled);
};

titleCase('help');

// This part is working, pushing into the array correctly now, titled array results. Now to loop it for real.
function titleCase(str) {
	var words = str.replace(myRegExp, "").toLowerCase().split(" ");
	var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;

	console.log (words);
    
    current = words[0].slice(0,1).toUpperCase() + words[0].slice(1).toLowerCase();
    console.log(words[0]); 
    console.log(current);
    var titled = [];
    titled.push(current);
    console.log(titled);

};

titleCase('help');  


// It's adding the new word to the new array but it's overwriting the old value now. Also getting a type error on words[i]
function titleCase(str) {
	var words = str.replace(myRegExp, "").toLowerCase().split(" ");
	var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;

	console.log (words + ' <= word list');

    for (i = 0; i <= words.length; i++){
        var current = words[i].slice(0,1).toUpperCase() + words[i].slice(1).toLowerCase();
        //console.log(words[i]); 
        console.log(current + ' <= current word');
        var titled = [];
        titled.push(current);
        console.log(titled  + ' <= titled word list');
    }

};

titleCase('help I need somebody');


// It's adding the new word to the new array but it's overwriting the old value now. Also getting a type error on words[i]
function titleCase(str) {
	var words = str.replace(myRegExp, "").toLowerCase().split(" ");
	var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;

	console.log (words + ' < word list');

    for (i = 0; i <= words.length; i++){
        var current = words[i].slice(0,1).toUpperCase() + words[i].slice(1).toLowerCase();
        //console.log(words[i]); 
        console.log(current + ' <= current word');
        var titled = [];
        titled.push(current);
        console.log(titled  + ' <= titled word list');
    }

};

titleCase('help I need somebody');



function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var o1 = { a: 1, b: 2 };
var o2 = copy(o1); // o2 looks like o1 now








// getting a little further along
// This part is working, now I need to loop it
function titleCase(str) {
	var words = str.replace(myRegExp, "").toLowerCase().split(" ");
	var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;

	console.log(words);
    
    titled = []

    for (i = 0; i <= words.length; i++){
    	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1).toLowerCase()
    	titled = titled.push(words[i])
    	console.log(words[i]); 
    	console.log(words);}

};

titleCase('help I need somebody');








    //I'm going to have to loop this to affect every word in the array.
    var current = wordList[0]; // this is the current word
    current = str.slice(0).toUpperCase() + str.slice(1) + " ";
    console.log(titled);
    console.log(str);
    var adding = titled.push(current);
    console.log(titled);
}

titleCase("hello and how are you");


    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}







function titleCase(str) {
    var titled = [];
    titled = str.slice(0, /\s/);
    console.log(titled);

}

titleCase("hello and how are you");



	function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
	}
 	capitalise('hello')

	(function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
	} ('hello'))








newArray.push(lastNumber + 1);




function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}



    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}	



function titleCase(str) {
var wordList = str.replace(myRegExp, "").toLowerCase().split(" ");

var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;

console.log (wordList);

for (var char in 'hello') {
    console.log('hello'[char]); // print char in new line
}
console.log(wordList);


function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 capitalise('hello')






for (var i = 0; i < wordList.length; i++) {
	wordList[i].charAt(0).toUpperCase; 
	}

	console.log(wordList);
	wordList.join(); 

  return str;
}

titleCase("I'm a little tea pot");






fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1



str = "hello";
str = str.toLowerCase();
first = str.charAt(0).toUpperCase();
str = first.pop()
console.log(str);
//////////////







String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

'string'.capitalizeFirstLetter() // String


//////

/*
Get the string and split it into single words
Make sure that they're all lowercase first



for each word, make the first letter uppercase using charAt(0)
then join it back together and put a string between
I think maybe I should use regex to remove punctuation first


Can I pop the uppercase letters back into the array, rejoin the array and then return it
Can I make 2 arrays and then join them together with the first [0] and then the rest [1+]

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

*/






function titleCase(str) {
var wordList = str.replace(myRegExp, "").toLowerCase().split(" ");

var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;



for (var i = 0; i < wordList.length; i++) {
	wordList[i].charAt(0).toUpperCase; 
	}

	console.log(wordList);
	wordList.join(); 

  return str;
}

titleCase("I am a little tea pot");




str = "hello";
str.toUpperCase();
console.log(str);


var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;
var newString = str.replace(myRegExp, "").toLowerCase();

var backwards = str.replace(myRegExp, "").toLowerCase().split("").reverse().join("");





function findLongestWord(str) {

// split the array using "" to get individual elements

var words = str.split(' ');
var longest = 0;

for (var i = 0; i < words.length; i++ ) {
	if (words[i].length > longest) {
		longest = words[i].length;
	}

}

return longest;

}

findLongestWord('The quick brown fox jumped over the lazy dog');

