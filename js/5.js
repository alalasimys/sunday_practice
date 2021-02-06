/** Напиши функцию которая перебирает массив логинов и проверяет есть ли имя введеное в инпут в этом массиве и в случае, если есть - выводит сообщение "Доступ разрешен" */

const arr = ['Egor kreed', 'Janna Friskie', 'Filipp Kirkotov'];
let value = prompt();

const getAcces = function (arr) {
  return arr.includes(value) ? "Доступ разрешен" : "Доступ запрещен" 
 }

 console.log(getAcces(arr));