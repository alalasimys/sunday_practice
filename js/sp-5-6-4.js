// Получить массив только неактивных пользователей (поле isActive).
// console.log(getInactiveUsers(users)); 
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
import users from "./users.js";
const getInactiveUsers = usersData => usersData.filter((user)=> user.isActive)
console.log(getInactiveUsers(users));
