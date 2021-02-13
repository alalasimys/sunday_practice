// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
import user from "./users.js";
const getNamesSortedByFriendsCount = (usersData) =>
  [...usersData]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((el) => el.name);
console.log(getNamesSortedByFriendsCount(user));
