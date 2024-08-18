//DESCRIPTION:
//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
//The string can contain any char.

//SOLUTION
function XO(str) {
    let countO = 0;
    let countX = 0;
  
    for (el of str.split('')) {
      if(el.toLowerCase() === 'x') countX++;
      if(el.toLowerCase() === 'o') countO++;
    }
  
  return countO === countX;
}