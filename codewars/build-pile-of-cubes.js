//DESCRIPTION:
//Your task is to construct a building which will be a pile of n cubes.
//You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

//SOLUTION
function findNb(m) {
    for (let i = 0; m > 0; i++) {
      m -= Math.pow(i, 3);
      if (m === 0) return i;
    }

    return -1;
}