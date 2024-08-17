//DESCRIPTION:
//Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//SOLUTION
function findNeedle(haystack) {
    return "found the needle at position "
      + (haystack.findIndex(el => el === "needle"));
}