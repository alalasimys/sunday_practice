/* напиши функцию которая будет суммировать соседние числа и пушить их в новый массив */

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
function sumNum(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += 2) {
  let total = arr[i] + arr[i + 1];

  newArr.push(total);
}
return newArr;
}

console.log(sumNum(someArr));