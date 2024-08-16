//DESCRIPTION
//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//SOLUTION
function squareSum(numbers) {
    return numbers.reduce(function(a, b) {
            return a + b*b;
    }, 0);
  
}