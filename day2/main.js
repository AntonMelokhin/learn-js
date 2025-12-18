//Declare a new variable
let challenge = "30 Days Of JavaScript";

//Print on console
console.log(challenge);

//Print length of the challenge on console
console.log(challenge.length);

//change challenge to upper case
let upperChallenge = challenge.toUpperCase();
console.log(upperChallenge);

//change challenge to lower case
let lowerChallenge = challenge.toLowerCase();
console.log(lowerChallenge);

//Cut first world of the string
const firstSpase = challenge.indexOf(" ");
const firstWorld = challenge.substring(0, firstSpase);
console.log(firstWorld);

//
const sliseChallenge = challenge.substring(3);
console.log(sliseChallenge);

//includes Script
const incScript = challenge.includes("Script");
console.log(incScript);

//Split into an array
const splitArray = challenge.split(" ");
console.log(splitArray);

//
console.log(splitArray[3]);

//
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const arr = companies.split(", ");
console.log(arr);

//Change 30 days of JavaScript to 30 days of Pithon
const challengePithon = challenge.replace("JavaScript", "Pithon");
console.log(challengePithon);

//Char 15 in challenge
const char = challenge.charAt(15);
console.log(char);

//Char J in challenge
const charJ = challenge.charCodeAt(11);
console.log(charJ);

//determine the position of the first occurrence of a in 30 Days Of JavaScript
const firstA = challenge.indexOf('a');
console.log(firstA);

//determine the position of the last occurrence of a in 30 Days Of JavaScript
const lastA = challenge.lastIndexOf('a');
console.log(lastA);

//search for the first position of the word because using indexOf
const str = 'You cannot end a sentence with because because because is a conjunction';
const firstBecause = str.indexOf('because');
console.log(firstBecause);

//search for the last position of the word because using indexOf
const lastBecause = str.lastIndexOf('because');
console.log(lastBecause);

//search for the first position of the word because using search
const firstBecausePosition = str.search('because');
console.log(firstBecausePosition);

//remove any trailing whitespace at the beginning and the end of a challenge
const trim = challenge.trim(' ');
console.log(trim);

//startsWith challenge
console.log(challenge.startsWith('30'));

//endsWith challenge
console.log(challenge.endsWith('JavaScript'));

//match challenge
console.log(challenge.match(/a/g));

//concat
const str1 = '30 Days Of';
const str2 = 'JavaScript';
const together = str1.concat(str2);
console.log(together);

//repeat 2 times challenge
console.log(challenge.repeat(2));
