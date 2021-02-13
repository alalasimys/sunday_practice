// Task 3
// Получить массив имен пользователей по полу (поле gender)
// console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
import Users from "./users.js";

const getUsersWithGender = (usersData, gender) =>
  usersData.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }
    return acc;
  }, []);
console.log(getUsersWithGender(Users, "male"));
