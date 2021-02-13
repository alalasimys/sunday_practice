// Task 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); 
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
import Users from "./users.js";
const getUsersWithEyeColor = (usersData, color) => usersData.filter((user)=> user.eyeColor === color);

console.log(getUsersWithEyeColor(Users, 'blue'));