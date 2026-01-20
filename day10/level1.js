//Execise 1
const emptySet = new Set();
console.log(emptySet.size);

//Execise 2
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log(numberSet.size);

//Execise 3
const numbers = new Set([0, 1, 2, 3, 4, 5]);
numbers.delete(3);
console.log(numbers);

//Execise 4
numbers.clear();
console.log(numbers.size);

//Execise 5
const arr = ['apple', 'banana', 'orange', 'apple', 'mango', 'banana'];
const stringSet = new Set(arr);
console.log(stringSet.size)

//Execise 6
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Ukraine', 'IceLand'];
const countriesMap = new Map();
countries.forEach(country => {
  countriesMap.set(country, country.length);
});
console.log(countriesMap);




