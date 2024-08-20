//DESCRIPTION:
//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers
//at their original positions.

//SOLUTION
function sortArray(array) {
  const oddArr = array.filter(num => num % 2 !== 0);
  oddArr.sort((num1, num2) => num1 - num2);
  
  for (let i = 0, j = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = oddArr[j++];
    }
  }
  
  return array;
}
