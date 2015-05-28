var count = function(target, counter) {
 var output = []
 for (var i = 1 ; i <= target/counter; i++) {
   output.push(counter * i);
 }
  return output;
};
