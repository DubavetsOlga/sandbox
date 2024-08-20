//DESCRIPTION:
//In a small town the population is p0 = 1000 at the beginning of a year.
//The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
//How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

//SOLUTION
function nbYear(p0, percent, aug, p) {

    for (let i = 0; p > 0; i++) {
      if (p0 < Math.ceil((p - aug) / (100 + percent) * 100))
          p = Math.ceil((p - aug) / (100 + percent) * 100);
      
      else return i === 50 ? 50 : i + 1;
    }
  
    return 0;
}
