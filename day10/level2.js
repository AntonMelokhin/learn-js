//Execise 1
const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);
const union = new Set([...a, ...b]);
console.log(union);

//Execise 2
const intersection = new Set(
  [...a].filter(x => b.has(x))
);
console.log(intersection);

//Execise 3
const difference = new Set(
  [...a].filter(x => !b.has(x))
);
console.log(difference);

