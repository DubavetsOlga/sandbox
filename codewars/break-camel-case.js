//DESCRIPTION:
//Complete the solution so that the function will break up camel casing, using a space between words.

//SOLUTION
function solution(string) {
  return string.split(/(?=[A-Z])/).join(" ");
}
