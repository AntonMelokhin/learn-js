//Execise 1
const base = Number(prompt('Enter base:'));
const height = Number(prompt('Enter height:'));
const area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

//Execise 2

const a = Number(prompt('Enter side a:'));
const b = Number(prompt('Enter side b:'));
const c = Number(prompt('Enter side c:'));
const perimeter = a + b + c;
console.log(`The perimeter of the triangle is ${perimeter}`);

//Execise 3
const length = Number(prompt('Enter length:'));
const width = Number(prompt('Enter width:'));
const rectangleArea = length * width;
const rectanglePer = 2 * (length + width);
console.log(`Rectangle area is ${rectangleArea} and rectangle perimeter is ${rectanglePer}`);

//Execise 4
const pi = 3.14;
const rad = Number(prompt('Enter radius:'));
const circleArea = pi * rad * rad;
const circleCir = 2 * pi * rad;
console.log(`Circle area is ${circleArea} and dovgina priblizno = ${Math.floor(circleCir)}`);

//Execise 5
//Here I asked for help in the chat gpt because I didn't understand the task.
//So if it should have been done differently, sorry, I don't know about this.
const m = 2;
const B = -2;
const xIntercept = -B / m;
console.log(`Slope = ${m}`);
console.log(`Y-intercept = (0, ${B})`);
console.log(`X-intercept = (${xIntercept}, 0)`);

//Execise 6
const x1 = 2, y1 = 2;
const x2 = 6, y2 = 10;
const m1 = (y2 - y1) / (x2 - x1);
console.log(`Slope between (${x1},${y1}) and (${x2},${y2}) is ${m1}`);

//Execise 7
const slope1 = 2;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(`Slope1: ${slope1}`);
console.log(`Slope2: ${slope2}`);
console.log(`BoHU piBHi?????? ${slope1 === slope2}`);

//Execise 8
const iks = Number(prompt('Enter x = '));
const igrik = iks * iks + 6 * iks + 9;
igrik == 0
? console.log(`Good job, your find x when y = ${igrik}`)
: console.log(`Bro, NT but it\'s wrong x`);



//Execise 9
const hour = Number(prompt('Enter hours:'));
const ratePerHour = Number(prompt('Enter rate per hour:'));
console.log(`Your weekly earning is ${hour * ratePerHour}`);

//Execise 10
const name = prompt('Enter your name:');
const nameLenght = name.length;
nameLenght > 7
? console.log('Your name loooooooooooooooooooong')
: console.log('Your name shrt');

//Execise 11
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
console.log(
  firstName.length > lastName.length
    ? `Your first name, ${firstName} is longer than your family name, ${lastName}`
    : firstName.length < lastName.length
      ? `Your family name, ${lastName} is longer than your first name, ${firstName}`
      : `Your first name, ${firstName} and your family name, ${lastName} are the same length`
);

//Execise 12
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

//Execise 13
let birthYear = Number(prompt('Enter your birth year:'));
const age = 2025 - birthYear;
age > 18
? console.log(`You are ${age}. You are old enough to drive`)
: console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);

//Execise 14
let years = Number(prompt("Enter number of years you live:"));
const secondsInYear = 365 * 24 * 60 * 60;
let totalSeconds = years * secondsInYear;
console.log(`You lived ${totalSeconds} seconds.`);

//Execise 15
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const format1 = `${year}-${month}-${day} ${hours}:${minutes}`;
const format2 = `${day}-${month}-${year} ${hours}:${minutes}`;
const format3 = `${day}/${month}/${year} ${hours}:${minutes}`;
console.log(format1);
console.log(format2);
console.log(format3);
