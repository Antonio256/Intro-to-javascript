


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
