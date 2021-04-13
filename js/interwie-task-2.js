const str1 = "dog";
const str2 = "dgoo";

const str3 = "hello world";
const str4 = "world hello";

const str5 = "dog";
const str6 = "dgo";

function getBool(str1, str2) {
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
console.log(getBool(str1, str2));
