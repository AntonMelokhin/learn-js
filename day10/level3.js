//Execise 1
const countries = require('./countries_data.js');

const languages = countries
  .flatMap(country => country.languages);

const uniqueLanguages = new Set(languages);

console.log(uniqueLanguages.size);

//Execise 2
