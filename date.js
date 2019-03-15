

const years = (yearBorn, currentYear) =>
  currentYear - yearBorn.slice(6, 10);


console.log(years ("01 05 1990", 2019) + " years old");
