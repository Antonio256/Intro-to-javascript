/*Enter any number
when number is less than 100, print try again
when number is greater than 100, print OKAY
print ok
enter again
*/


const num = number => {
  if (number<100){
    console.log("TRY AGAIN");
  }else {
    console.log("OKAY!")
}
}

console.log(num(200));
