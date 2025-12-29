//Execise 1
let length = 15;
let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < length; i++){
    let randomIndex = Math.floor(Math.random() * chars.length);
    randomId += chars[randomIndex];
}
console.log(randomId);

//Execise 2
let hexChars = 'abcdef0123456789';
randomId = '';
for (let i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random() * hexChars.length);
    randomId += hexChars[randomIndex];
}
console.log(`#${randomId}`);

//Execise 3
let r, g, b;
r = Math.floor(Math.random() * 256);
g = Math.floor(Math.random() * 256);
b = Math.floor(Math.random() * 256);
console.log(`rgb ${r},${g},${b}`);

//Execise 4
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
const countriesUpperCase = [];
for (let i = 0; i < countries.length; i++) {
  countriesUpperCase.push(countries[i].toUpperCase());
}
console.log(countriesUpperCase);

//Execise 5
const countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

//Execise 6
const countriesArray = [];
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const shortName = country.slice(0, 3).toUpperCase();
  const length = country.length;

  countriesArray.push([country, shortName, length]);
  console.log(countriesArray[i]);
};

//Execise 7
const countriesWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes('land')) {
    countriesWithLand.push(countries[i]);
  }
};
if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
};

//Execise 8
const countriesEndingWithIa = countries.filter(country => country.toLowerCase().endsWith('ia'));

if (countriesEndingWithIa.length > 0) {
  console.log(countriesEndingWithIa);
} else {
  console.log('These are countries ends without ia');
};

//Execise 9
let longestCountry = countries[0];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry);

//Execise 10
const fiveCharCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    fiveCharCountries.push(countries[i]);
  }
}
console.log(fiveCharCountries);

//Execise 11
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
let longestWord = webTechs[0];
for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longestWord.length) {
    longestWord = webTechs[i];
  }
}
console.log(longestWord);

//Execise 12
const webArray = [];
for (let i = 0; i < webTechs.length; i++) {
  const tech = webTechs[i];
  const lengthWeb = tech.length;

  webArray.push([tech, lengthWeb]);
  console.log(webArray[i]);
};

//Execise 13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = '';
for (let i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0];
};
acronym = acronym.toUpperCase();
console.log(acronym);

//Execise 14
for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}
//or
for (const tech of webTechs) {
  console.log(tech);
}

//Execise 15
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

//Execise 16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}
