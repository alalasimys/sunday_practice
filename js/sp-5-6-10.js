// Task 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
import users from "./users.js";

const getSortedUniqueSkills = (usersData) => {
  return usersData
    .flatMap((user) => user.skills)
    .filter((el, idx, arr) => arr.indexOf(el) === idx)
    .sort();
};
console.log(getSortedUniqueSkills(users));
