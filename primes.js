//Prints prime numbers up to 100


var n=100;
for (var num = 2; num <= n; num++) {

  var notPrime = false;
  for (var a = 2; a <= num; a++) {
      if (num%a===0 && a!==num) {
          notPrime = true;
      }
  }
  if (notPrime === false) {
    console.log(num);
  }
}
