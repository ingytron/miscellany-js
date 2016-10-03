
function largestOfFour(arr) {
    var maxis = [];
    for (i=0; i < arr.length; i += 1) {
        maxis.push(Math.max.apply(Math, arr[i]));
    }
    return maxis;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

