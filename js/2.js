// Следующая функция возвращает true, если параметр age больше 18. В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

const isAdult = function(age) {
  return age > 18 ? true : confirm(`You too young ${age}`);
} 
console.log(isAdult(17));