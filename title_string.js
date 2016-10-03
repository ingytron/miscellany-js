function titleCase(str) {
        var words = str.replace(myRegExp, "").toLowerCase().split(" ");
        var myRegExp = /[^a-zA-Z][\.,-\/#!$%\^&\*;:{}=\-_`~()]?/ig;
        //console.log (words);
        var titled = [];

    for (i = 0; i < words.length; i++){
        var current = words[i].slice(0,1).toUpperCase() + words[i].slice(1).toLowerCase();
        // console.log(current + ' <= current word');
        titled.push(current);
        console.log(titled  + ' <= titled word list');
        done = titled.join(" ")
    }
    return done;
}

titleCase('HERE IS MY HANDLE HERE IS MY SPOUT');