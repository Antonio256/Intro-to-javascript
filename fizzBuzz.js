//Enter any number up to 100 starting from 1
//check if number is a multiple of 3, print FIzz
//Check if a number is a multiple of 5, print Buzz
//otherwise, print FizzBuzz

var a

for (a = 1; a<=100; a++){
  if (a % 15 == 0) console.log("FIzzBuzz");
  if (a % 3 == 0) console.log("FIzz");
  if (a % 5 == 0) console.log("Buzz");

}
