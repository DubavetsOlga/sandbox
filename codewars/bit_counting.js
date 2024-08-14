//DESCRIPTION
//Write a function that takes an integer as input, and returns the number of bits that are equal
//to one in the binary representation of that number. You can guarantee that input is non-negative.

//SOLUTION
var countBits = function(n) {
    return n.toString(2).split('').reduce(function(a, b) {
          return parseInt(a) + parseInt(b);
      }, 0);
};