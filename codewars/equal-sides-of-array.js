//DESCRIPTION:
//You are going to be given an array of integers. Your job is to take that array
//and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
//If there is no index that would make this happen, return -1.

//SOLUTION
function findEvenIndex(arr) {
  const sum = (arr) => arr.reduce((sum, element) => sum += element, 0);
  
  for (let i = 0; i < arr.length; i++) {
    if (sum(arr.slice(0, i)) === sum(arr.slice(i + 1))) {
      return i;
    }
  }
  
  return -1;
}
