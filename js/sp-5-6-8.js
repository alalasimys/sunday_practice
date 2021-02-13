// Массив имен всех пользователей у которых есть друг с указанным именем.
// console.log(getUsersWithFriend(users, 'Briana Decker')); 
// [ 'Sharlene Bush', 'Sheree Anthony' ]// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
import users from "./users.js";
const getUsersWithFriend = (usersData, friend) => usersData.reduce((acc, user)=> {
  if(user.friends.includes(friend)) {
    acc.push(user.name)
  }
  return acc;
}, []);
console.log(getUsersWithFriend(users, 'Briana Decker'));