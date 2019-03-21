/*
define the function FIzzBuzz
set attributes, min and max which are starting point and end point
if the number is a multiple of both 3 and 5, same as a multiple of 15, print FIzzBuzz
if the number is a multiple of 3, print FIzz
if the number is a multiple of 5, print Buzz
if number is not multiple of both, print number

*/



const FIzzBuzz = (min, max) => {for (x=min; x<=max; x++){
  if(x%15 ==0){
    console.log( "FizzBuzz");
  }else if (x%3==0){
    console.log("Fizz")
  }else if (x%5==0)  {
    console.log("Buzz");
  }else{
    console.log(x);
  }
}
}
console.log(FIzzBuzz(1, 100));
