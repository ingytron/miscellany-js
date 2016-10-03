// Are the letters of the  second word contained in the first?
function mutation(arr) {
    var outerWord = arr[0].toLowerCase().split('');
    var innerWord = arr[1].toLowerCase().split('');
//    innerWord = innerWord.split('');
  //  outerWord = outerWord.split('');
    console.log(innerWord, outerWord);
    for (i=0; i<innerWord.length; i++) {
        if (outerWord.indexOf(innerWord[i]) < 0)
        return false;
        }
    return true;
}

mutation(['hello', 'ho']);
