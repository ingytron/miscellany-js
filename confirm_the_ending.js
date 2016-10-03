function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    var n = str.split(" ") ;

   if (n[n.length - 1] === target) {
              //console.log([n.length -1]);
            return true;
          }

   else { 
      if (str.substr(-1) === target) {
      return true;
        }
    }
    

    return false;
}
end('Bastian is a boy', 'boy');