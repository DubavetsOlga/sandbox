//DESCRIPTION
//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit,
//continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//SOLUTION
function digitalRoot(n) {
    let sum = n;
  
    while (sum > 9)
      sum = sum.toString().split('').reduce(function(a, b) {
          return parseInt(a) + parseInt(b);
      }, 0);
    
    return sum;
}