const fibon = function (num) {
  let fibonArray = [];
  for (let i = 1; i <= num; i++) {
    if (num <= 1) {
      return fibonArray.push(num);
    }
    let fibonNumber = fibon(num-1) + fibon(num-2);
    return fibonArray.push(fibonNumber);
  }
  return fibonArray;
}


const fibonResult = fibon(8);
console.log(fibonResult);
