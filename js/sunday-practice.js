// Task 5
// У нас есть объект, нужно создать функцию, которая будет его перебирать 
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }
const obj1 = {
  'my name': 'John',
  'i like my work': true,
  'programming languages': ['js', 'java', 'c++']
}
const makeObj = function(obj) {
  for(let key in obj) {
    if(Array.isArray(obj[key])) {
    // console.log(obj[key]);
    for(let item of obj[key]) {
      obj[`I like ${item}`] = item
    }
}
}
}

makeObj(obj1);
console.log(obj1);

Array.