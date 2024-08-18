//DESCRIPTION:
//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

//SOLUTION
function findAverage(array) {
   return array.length === 0 ? 0 : array.reduce(function(a, b) {
          return a + b;
      }, 0) / array.length;
}