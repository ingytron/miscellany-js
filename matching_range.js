// This takes input values x1 and x2, and y1 and y2, then sums the numbers that appear in range x and y together.
function sum_matching_range(x1, x2, y1, y2) {
	var sum = 0;
    for (var i = x1; i <= x2; i++) {
        if (i < y1){
            continue; 
        }
        else if (i >= y1 && i <= y2) {
            sum += i;
            console.log(sum);
        }
    }
    return sum;
}

sum_matching_range(2, 5, 3, 7);
