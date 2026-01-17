//Execise 1
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let maxSkills = 0;
let person = '';
const usersKeys = Object.keys(users);

for(const user of usersKeys){
    const skillsCount = users[user].skills.length;

    if(skillsCount > maxSkills){
        maxSkills = skillsCount;
        person = user;
    }
};
console.log(person, maxSkills);

//Execise 2
let loggetInCount = 0;

for(const user in users){
    if (users[user].isLoggedIn){
        loggetInCount++;
    };
};
console.log(loggetInCount);

let highPointCount = 0;

for(const user in users){
    if (users[user].points >= 50){
        highPointCount++;
    };
};
console.log(highPointCount);

//Execise 3
const mern = ['MongoDB', 'Express', 'React'];
const mernDevelopers = Object.keys(users).filter(user => {
  const skills = users[user].skills;

  return (
    mern.every(skill => skills.includes(skill)) &&
    (skills.includes('Node') || skills.includes('Node.js'))
  );
});

console.log(mernDevelopers);

//Execise 4
const newUsers = Object.assign({}, users);

newUsers.Anton = {
  email: 'melantoxa@gmail.com',
  skills: ['JavaScript'],
  age: 23,
  isLoggedIn: true,
  points: 10
};

console.log(newUsers);

//Execise 5
const keys = Object.keys(users);
console.log(keys);

//Execise 6
const values = Object.values(users);
console.log(values);

//Execise 7
const countries = {
  Ukraine: {
    capital: 'Kyiv',
    population: 40000000,
    languages: ['Ukrainian']
  },
  Germany: {
    capital: 'Berlin',
    population: 83000000,
    languages: ['German']
  },
  France: {
    capital: 'Paris',
    population: 67000000,
    languages: ['French']
  }
};
for (const country in countries) {
  console.log(`Country: ${country}`);
  console.log(`Capital: ${countries[country].capital}`);
  console.log(`Population: ${countries[country].population}`);
  console.log(`Languages: ${countries[country].languages.join(', ')}`);
  console.log('-----------------------------');
}