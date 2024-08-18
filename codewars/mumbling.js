//DESCRIPTION:
//This time no story, no theory. The examples below show you how to write function accum.

//SOLUTION
function accum(s) {
	return s.split('').map((num, index) => num[0].toUpperCase() + num.toLowerCase().repeat(index)).join('-');
}