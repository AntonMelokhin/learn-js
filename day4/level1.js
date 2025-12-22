//Execise 1
const yourAge = Number(prompt('Enter your age:'));
const ageForDrive = 18;
if (yourAge >= ageForDrive) {
    console.log('You are old enough to drive.')
} else {
    console.log(`You are left with ${ageForDrive - yourAge} years to drive.`)
};

//Execise 2
const age = Number(prompt('Enter your age:'));
const myAge = 23;
if (age > myAge) {
    console.log(`You are ${age - myAge} years older than me.`)
} else {
    console.log(`I am ${myAge - age} years older than you.`)
};

//Execise 3
  let a = 4;
  let b = 3;

//using if else
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
};

//ternary operator
a > b
? console.log(`${a} is greater than ${b}`)
: console.log(`${a} is less than ${b}`);

//Execise 4
const num = Number(prompt('Enter number:'));
if (num % 2 === 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is is an odd number`)
};
