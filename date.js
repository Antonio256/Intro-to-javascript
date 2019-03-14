

const years = (yearBorn, currentYear) =>
  currentYear - yearBorn.split(" ") [2];


console.log(years ("01 05 1990", 2019) + " years old");
