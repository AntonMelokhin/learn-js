//Execise 1
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const numbers = text.match(/\d+/g).map(Number);

const totalIncome =
  numbers[0] * 12 +
  numbers[1] +
  numbers[2] * 12

console.log(totalIncome);

//Execise 2
const text2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';
const points = text2.match(/-?\d+/g).map(Number);

const sortedPoints = points.sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log(sortedPoints);
console.log(distance);

//Execise 3
function is_valid_variable(variable) {
  const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
  return pattern.test(variable)
};

console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first-name'));
console.log(is_valid_variable('1first_name'));
console.log(is_valid_variable('firstname'));

