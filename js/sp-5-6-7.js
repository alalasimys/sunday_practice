// Task 7
// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916
import users from "./users.js";
const calculateTotalBalance = (usersData) =>
  usersData.reduce((acc, user) => (acc += user.balance), 0);
console.log(calculateTotalBalance(users));
