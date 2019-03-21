/*
Create a constant to shufle the prime numbers generated
create a maximum limit for prime numbers, counting and checking through them


*/

const shuffle = require('./shuffler');
var arr = [];


const primelogger = (min, max) => {
 for( var Number = min; Number <= max; Number++)
  {
    count = 0;
    for (i = 2; i <= Number/2; i++)
    {
    if(Number%i === 0)
    {
        count++;
      break;
  }
    }
    if(count == 0 && Number != 1 )
    {
  console.log(Number);
  arr.push(Number);

    }
  }
  //return 0;
}

console.log(primelogger(1,100));
console.log("__________________________________________prime array");
console.log(arr);
console.log("__________________________________________shuffled array");


console.log(shuffle(arr));

let sortAscending = array => {
 //create array to store sort array
 const array2 = [];
 //create position variable and set it to 0.
 let pos= 0;
 //store maximum value in position 0.
 let max = array[0];
 min =array [0];
 //use loop to find maximum number.
 for (let j = 0; j<array.length; j++){
   if (max < array[i]){
     max = array [i];
   }
 }
 for (let i=0; i<array.length; i++){
   for (let k =0; k<array.length; k++){
     if (array[k] !=null){
       if (min > array[k]){
         min = array [k];
         pos = k;
       }
     }
     array2[i]=min;
     array[pos]=null;
   }
   return array2.push(i);
 };

 }
console.log("==============================array in ascending order");
console.log(sortAscending(arr));
