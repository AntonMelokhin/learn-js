//Execise 1
const score =  Number(prompt('Enter score:'));
if (score >= 80 && score <= 100) {
    console.log('A');
} else if (score >= 70 && score <= 89) {
    console.log('B');
} else if (score >= 60 && score <= 69) {
    console.log('C');
} else if (score >= 50 && score <= 59) {
    console.log('D');
} else if (score >= 0 && score <= 49) {
    console.log('F');
} else {
    console.log("Invalid score");
};

//Execise 2
let monthUserInput = prompt('What month is today ?');
let month = monthUserInput.toLowerCase();
switch (month) {
  case 'september':
    console.log('Today is Autumn')
    break
  case 'october':
    console.log('Today is Autumn')
    break
  case 'november':
    console.log('Today is Autumn')
    break
  case 'december':
    console.log('Today is Winter')
    break
  case 'january':
    console.log('Today is Winter')
    break
  case 'february':
    console.log('Today is Winter')
    break
  case 'march':
    console.log('Today is Spring')
    break
  case 'april':
    console.log('Today is Spring')
    break
  case 'may':
    console.log('Today is Spring')
    break
  case 'june':
    console.log('Today is Summer')
    break
  case 'july':
    console.log('Today is Summer')
    break
  case 'august':
    console.log('Today is Summer')
    break
  default:
    console.log('It is not a month.')
};

//Execise 3
let dayUserInput = prompt('What day is today ?');
console.log(dayUserInput);
let day = dayUserInput.toLowerCase();

switch (day) {
  case 'monday':
    console.log('Monday is a working day.')
    break
  case 'tuesday':
    console.log('Tuesday is a working day.')
    break
  case 'wednesday':
    console.log('Wednesday is a working day.')
    break
  case 'thursday':
    console.log('Thursday is a working day.')
    break
  case 'friday':
    console.log('Friday is a working day.')
    break
  case 'saturday':
    console.log('Saturday is a weekend.')
    break
  case 'sunday':
    console.log('Sunday is a weekend.')
    break
  default:
    console.log('It is not a week day.')
};