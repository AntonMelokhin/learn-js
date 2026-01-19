//Execise 1
//forEach
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(num => {
  console.log(num * 2);
});

//map
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//filter
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

//reduce
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);

//Execise 2
//forEach
function logItem(item) {
  console.log(item);
}
numbers.forEach(logItem);

//map
function doubleNumber(num) {
  return num * 2;
}
const doubled2 = numbers.map(doubleNumber);
console.log(doubled2);

//filter
function isEven(num) {
  return num % 2 === 0;
}
const evens2 = numbers.filter(isEven);
console.log(evens2);

//reduce
function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}
const total2 = numbers.reduce(sum, 0);
console.log(total);

//Execise 3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach(country => {
  console.log(country);
});

//Execise 4
names.forEach(name => {
  console.log(name);
});

//Execise 5
numberss.forEach(num => console.log(num));

//Execise 6
const countriesUpper = countries.map(country => country.toUpperCase());
console.log(countriesUpper);

//Execise 7
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);
 
//Execise 8
const squaredNumbers = numberss.map(num => num * num);
console.log(squaredNumbers);

//Execise 9
const namesUpper = names.map(name => name.toUpperCase());
console.log(namesUpper);

//Execise 10
const prices = products.map(product => product.price);
console.log(prices);

//Execise 11
const landCountries = countries.filter(country =>
  country.toLowerCase().includes('land')
);
console.log(landCountries);

//Execise 12
const sixCharCountries = countries.filter(country => country.length === 6);
console.log(sixCharCountries);

//Execise 13
const sixAndMoreCountries = countries.filter(country => country.length >= 6);
console.log(sixAndMoreCountries);

//Execise 14
const startWithE = countries.filter(country =>
  country.startsWith('E')
);
console.log(startWithE);

//Execise 15
const validPrices = products.filter(
  product => typeof product.price === 'number'
);
console.log(validPrices);

//Execise16
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}
const mixedArray = [1, 'Chpok', true, 'World', 15, 'JS'];
const result = getStringLists(mixedArray);
console.log(result);

//Execise 17
const sum1 = numberss.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum1);

//Execise 18
const sentence = countries.reduce((acc, country, index) => {
  if (index === 0) {
    return country;
  } else if (index === countries.length - 1) {
    return `${acc}, and ${country}`;
  } else {
    return `${acc}, ${country}`;
  }
}, '');

const finalSentence = `${sentence} are north European countries`;

console.log(finalSentence);

//Execise 19
//some
const hasBigNumber = numbers.some(num => num > 3);

console.log(hasBigNumber);

//every
const allSmall = numbers.every(num => num < 10);

console.log(allSmall);

//Execise 20
const hasLongName = names.some(name => name.length > 7);
console.log(hasLongName);

//Execise 21
const allContainLand = countries.every(country =>
  country.toLowerCase().includes('land')
);
console.log(allContainLand);

//Execise 22
//find
const found = numbers.find(num => num > 5);

console.log(found);

//findIndex
const index = numbers.findIndex(num => num > 5);

console.log(index);

//Execise 23
const sixLetterCountry = countries.find(country => country.length === 6);
console.log(sixLetterCountry);

//Execise 24
const indexSixLetterCountry = countries.findIndex(country => country.length === 6);
console.log(indexSixLetterCountry);

//Execise 25
const indexNorway = countries.findIndex(country => country === 'Norway');
console.log(indexNorway);

//Execise 26
const indexSwamp = countries.findIndex(country => country === 'Russia');
console.log(indexSwamp);



