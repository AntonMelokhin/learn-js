//Execise 1
const countries = [
  {
    countrie: 'Finland',
    capital: 'Helsinki',
    population: 5536146,
    languages: ['Finnish', 'Swedish']
  },
  {
    countrie: 'Estonia',
    capital: 'Tallinn',
    population: 1326535,
    languages: ['Estonian']
  },
  {
    countrie: 'Sweden',
    capital: 'Stockholm',
    population: 10353442,
    languages: ['Swedish']
  }
];

for (const { countrie, capital, population, languages } of countries) {
  console.log(countrie, capital, population, languages);
};

//Execise 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

//Exxecise 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

function convertArrayToObject(students) {
  const result = []

  for (const [name, skills, scores] of students) {
    result.push({
      name,
      skills,
      scores
    })
  }

  return result
};
console.log(convertArrayToObject(students));


//Execise 4
