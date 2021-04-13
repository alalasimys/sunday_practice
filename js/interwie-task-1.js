const arr = [
  ["some"],
  12,
  [34, [2, [33]], [12, [23, 89, [778, 999]]], [["88"]]],
  34,
  [23],
  "hello",
  ["five", ["some arr", ["last arr"], { name: "John" }]],
];

function getFlat(arr) {
  let res = [];
  arr.forEach((elem) =>
    Array.isArray(elem) ? (res = [...res, ...getFlat(elem)]) : res.push(elem)
  );
  return res;
}

console.log(getFlat(arr));
