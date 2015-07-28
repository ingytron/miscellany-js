/*jshint multistr:true */
var text = "This is a bunch of text containing my name Ingrid, and it's all \
about me, and by me I mean Ingrid. Yes, Ingrid. Ingrid the greatest of all.";
var myName = "Ingrid";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === 'I') {
        for (var j = i; j < myName.length + i; j++ ) {
            hits.push(text[j]);
        }
        }
}

if (hits.length === 0) {
    console.log("Your name wasn't found");}
    else {
        console.log(hits);
    };