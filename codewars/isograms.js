//DESCRIPTION:
//An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//Implement a function that determines whether a string that contains only letters is an isogram.
//Assume the empty string is an isogram. Ignore letter case.

//SOLUTION
function isIsogram(str){
  let arr = [];
  
  for (el of str.split('')) {
    if (arr.includes(el.toLowerCase())) return false;
    arr.push(el.toLowerCase());
  }
  
  return true;
}