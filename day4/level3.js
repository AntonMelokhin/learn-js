//Execise 1
let monthInput = prompt("Enter a month:");
let month = monthInput.toLowerCase();
let year = Number(prompt("Enter a year:"));
let isLeapYear =
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 400 === 0);
let days;
if (month === "january") {
  days = 31;
} else if (month === "february") {
  days = isLeapYear ? 29 : 28;
} else if (month === "march") {
  days = 31;
} else if (month === "april") {
  days = 30;
} else if (month === "may") {
  days = 31;
} else if (month === "june") {
  days = 30;
} else if (month === "july") {
  days = 31;
} else if (month === "august") {
  days = 31;
} else if (month === "september") {
  days = 30;
} else if (month === "october") {
  days = 31;
} else if (month === "november") {
  days = 30;
} else if (month === "december") {
  days = 31;
} else {
  console.log("Invalid month name");
}

if (days) {
  console.log(`${month} has ${days} days.`);
}
