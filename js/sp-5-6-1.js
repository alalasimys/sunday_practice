/** Получить массив имен всех пользователей (поле name).
 * // console.log(getUserNames(usersData))// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ] */
import Users from "./users.js";

const getUserNames = (usersData) => usersData.map((user) => user.name);
console.log(getUserNames(Users));
