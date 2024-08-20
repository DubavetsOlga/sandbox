//DESCRIPTION:
//You are given an array(list) strarr of strings and an integer k. Your task is to return
//the first longest string consisting of k consecutive strings taken in the array.

//SOLUTION
function longestConsec(strarr, k) {
    if (k < 1 || k > strarr.length) {
      return "";
    }
  
    const strLengthArr = strarr.map(str => str.length);
    let maxLengthSum = -1;
    let maxLengthSumIndex = -1;
    for (let i = 0; i <= strLengthArr.length - k; i++) {
      const lengthSum = strLengthArr.slice(i, i + k).reduce((sum, length) => sum += length, 0);
      if (lengthSum > maxLengthSum) {
        maxLengthSum = lengthSum;
        maxLengthSumIndex = i;
      }
    }
  
    return strarr.slice(maxLengthSumIndex, maxLengthSumIndex + k).reduce((strRes, str) => strRes += str, '');
}