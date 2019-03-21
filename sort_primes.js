
/*
Using your prime checker code
prints numbers from 0 to 100
Shuffle function to shuffle up elements of the Array

*/

const isPrime =(n)=>{
var num;
if (n < 2) {
  return false;
}
for (num=2; num<n;num++) {
  if (n%num===0)
  return false;
}
return true;
}

const isEven = (n)=> {
if (n%2!==0) {
  return false;
  }
  return true;

}

const isOdd = (n)=> {
if (n%2===0) {
  return false;
  }
  return true;

}

const isFizzbuzz = (n)=> {
  if ((num%3!==0)||(num%5!==0)) {
    return false;
  }
  return true;
}
const isFizz = (n)=> {
  if ((num%3!==0)) {
    return false;
  }
  return true;
}
const isBuzz = (n)=> {
  if ((num%5!==0)) {
    return false;
  }
  return true;
}


const numberIdentifier = (n)=> {
var
  case1=[],case1_dup=[],case2=[],case2_dup=[],case3=[],case3_dup=[],case4=[],case4_dup=[],case5=[],case5_dup=[],case6=[],case6_dup=[],case7=[],case7_dup=[],case8=[],case8_dup=[],case9=[],case9_dup=[],case10=[],case10_dup=[],case11=[],case11_dup=[],case12=[],case12_dup=[],overallArray=[],addedArray=[],counter

for (num=0; num<=n; num++) {
  if (isFizzbuzz(num) && isEven(num)) {
    case1.push(num,"even","fizzBuzz");
    case1_dup.push("even","fizzBuzz");
  }
  else if (isFizzbuzz(num) && isOdd(num)) {
    case2.push(num,"odd","fizzBuzz");
    case2_dup.push("odd","fizzBuzz");
  }
  else if (isBuzz(num) && isOdd(num) && isPrime(num)) {
    case3.push(num,"odd","prime","buzz");
    case3_dup.push("odd","prime","buzz");
  }
  else if (isFizz(num) && isOdd(num) && isPrime(num)){
    case4.push(num,"odd","prime","fizz");
    case4_dup.push("odd","prime","fizz");
  }
  else if (isBuzz(num) && isOdd(num)) {
    case5.push(num,"odd","buzz");
    case5_dup.push("odd","buzz");
  }
  else if (isFizz(num) && isOdd(num)) {
    case6.push(num,"odd","fizz");
    case6_dup.push("odd","fizz");
  }
  else if (isBuzz(num) && isEven(num)) {
    case7.push(num,"even","buzz");
    case8_dup.push("even","buzz");
  }
  else if (isFizz(num) && isEven(num)) {
    case8.push(num,"even","fizz");
    case8_dup.push("even","fizz");
  }
  else if (isOdd(num) && isPrime(num)) {
    case9.push(num,"odd","prime");
    case9_dup.push("odd","prime");
  }
  else if (isEven(num) && isPrime(num)) {
    case10.push(num,"even","prime");
    case10_dup.push("even","prime");
  }
  else if (isOdd(num)) {
    case11.push(num,"odd")
    case11_dup.push("odd");
  }
  else {
    case12.push(num,"even")
    case12_dup.push("even");
  }
}

overallArray.push(case1,case2,case3,case4,case5,case6,case7,case8,case9,case10,case11,case12);
console.log(overallArray);
addedArray=case1_dup.concat(case2_dup,case3_dup,case4_dup,case5_dup,case6_dup,case7_dup,case8_dup,case8_dup,case9_dup,case10_dup,case11_dup,case12_dup);
return addedArray;
}
var array=numberIdentifier(100);


const counter =(array) => {
var count = [];

for (var i = 0; i < array.length; i++) {
  if (count[array[i]]) {
  count[array[i]] += 1;
  } else {
  count[array[i]] = 1;
 }
}
return count;

}
counter(array);
