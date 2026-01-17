//Execise 1
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

const totalPrice = products
  .map(product => product.price)
  .filter(price => typeof price === 'number')
  .reduce((acc, price) => acc + price, 0);

console.log(totalPrice);

//Execise 2
const totalPrice2 = products.reduce((acc, product) => {
  if (typeof product.price === 'number') {
    return acc + product.price;
  } else {
    return acc;
  }
}, 0);

console.log(totalPrice2);

//Execise 3
const countries = [
  'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand',
  'Estonia', 'Ukraine', 'Iceland', 'Pakistan', 'Kazakhstan', 'Australia'
];

function categorizeCountries(pattern) {
  return countries.filter(country =>
    country.toLowerCase().includes(pattern.toLowerCase())
  );
}

console.log(categorizeCountries('land'));

//Execise 4

function countCountriesByFirstLetter(countries) {
  const letterCount = {};

  countries.forEach(country => {
    const firstLetter = country[0].toUpperCase();
    if (letterCount[firstLetter]) {
      letterCount[firstLetter]++;
    } else {
      letterCount[firstLetter] = 1;
    }
  });
  return Object.entries(letterCount).map(([letter, count]) => ({
    letter,
    count
  }));
}
console.log(countCountriesByFirstLetter(countries));

//Execise 5
function getFirstTenCountries() {
  return countries.slice(0, 10);
}

console.log(getFirstTenCountries());

//Execise 6
function getLastTenCountries() {
  return countries.slice(-10);
}

console.log(getLastTenCountries());

//Execise 7
function mostUsedInitialLetter(countries) {
  const letterCount = {};
  countries.forEach(country => {
    const firstLetter = country[0].toUpperCase();
    letterCount[firstLetter] = (letterCount[firstLetter] || 0) + 1;
  });
  let maxCount = 0;
  let mostUsedLetter = '';

  for (const [letter, count] of Object.entries(letterCount)) {
    if (count > maxCount) {
      maxCount = count;
      mostUsedLetter = letter;
    }
  }

  return { letter: mostUsedLetter, count: maxCount };
}

console.log(mostUsedInitialLetter(countries));