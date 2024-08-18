/*DESCRIPTION:
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"*/

//SOLUTION
function bmi(weight, height) {
  const res = weight / height / height;

  if (res <= 18.5) return "Underweight";
  if (res <= 25) return "Normal";
  if (res <= 30) return "Overweight";

  return "Obese";
}