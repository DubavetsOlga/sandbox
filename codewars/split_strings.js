//DESCRIPTION
//Complete the solution so that it splits the string into pairs of two characters.
//If the string contains an odd number of characters then it should replace the missing second
//character of the final pair with an underscore ('_').

//SOLUTION
function solution(str){
    let letters = str.split('');
    let resultArray = [];
    
    for (i = 0; i < letters.length; i += 2 ) {
       resultArray.push(letters[i] + (letters[i+1] ? letters[i+1] : '_'));
    }
    
    return resultArray;
}