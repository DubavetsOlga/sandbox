//DESCRIPTION
//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//SOLUTION
function findUniq(arr) {
    const uniq = arr.filter((element) => element !== arr[0]);
    
    return uniq.length === 1 ? uniq[0] : arr[0];
}