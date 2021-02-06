/** Напишите решение, которое вычисляет сумму квадратных корней для всех четных чисел целочисленного массива */

 const arr = [4, 3, 5, 44, 44, 33, 4, 9];

 const getSum = function(arr) {
   let sum = 0;

   for (let i = 0; i < arr.length; i++) {
     if (arr[i]%2 === 0) {
       sum += Math.sqrt(arr[i]);
     }    
   }

return sum;
 }

 console.log(getSum())