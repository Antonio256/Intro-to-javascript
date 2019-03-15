/*

crate a function using a constant
set the range of numbers as min and max
input numbers within the range
count numbers from min to max
if number is divisible by 2, print the number 
*/


const even = (min, max) => {
  for (a = min; a<=max; a++){
  if (a % 2 === 0){
    console.log(a);
  }

  }
}
console.log(even(1, 20));
