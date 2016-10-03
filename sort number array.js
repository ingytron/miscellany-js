function where(arr, num) {
  arr.sort(function(a,b) {
  return a - b;
  });
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) 
          //console.log(arr.indexOf(i));
          return parseInt(i);
    }
    return arr.length;
}





//where([40, 60], 50, "");
//where([10, 20, 30, 40, 50], 35)
//where([10, 20, 30, 40, 50], 30)
//where([40, 60], 50)
//where([5, 3, 20, 3], 3)
//where([2, 20, 10], 1)
//where([2, 5, 10], 15)
