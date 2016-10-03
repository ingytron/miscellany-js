function factorialize(num) {
  current = num;
  total = 1;
  while (current >= 1) {
    total *= current;
    current -= 1;
    //console.log(num);
  }
  return total;
} 
  
  
factorialize(5);