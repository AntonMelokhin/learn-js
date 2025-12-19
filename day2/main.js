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

//LEVEL-2

//
console.log("The quote \'There is no exercise better for\nthe heart than reaching down and lifting people up.\'\nby John Holmes teaches us to help one another.");

//
console.log("Love is not patronizing and charity isn\'t about pity,\nit is about love. Charity and love are the same -- with charity you give love,\nso don\'t just give money but reach out your hand instead.");

//
console.log(typeof '10' == typeof 10);
let strTen = "10";
const ten = +strTen;
console.log(typeof ten == typeof 10);

//
console.log(parseFloat('9.8') == 10);
const a = Math.ceil(parseFloat('9.8'));
console.log(a == 10);

//
const word1 = 'python';
const word2 = 'jargon';
console.log(word1.includes("on") && word2.includes("on"));

//
const string1 = 'I hope this course is not full of jargon.';
console.log(string1.includes("jargon"));

//
const randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

//
const randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

//
let randomNum3 = Math.ceil(Math.random() * 255);
console.log(randomNum3);

//
let stringJS = "JavaScript";
const stringLength = stringJS.length;
const randomLater = Math.floor(Math.random() * (stringLength));
console.log(stringJS[randomLater]);

//
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

//
let phrase = "You cannot end a sentence with because because because is a conjunction";
const firstBecauseWord = phrase.indexOf("because");
const slicedPhrase = phrase.substr(firstBecauseWord, "because because because".length);
console.log(slicedPhrase);


//LEVEL-3

//
const phrase2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const searchLove = phrase2.match(/love/gi);
console.log(searchLove.length);

//
const searchBecause = phrase.match(/because/gi);
console.log(searchBecause.length);

//
const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

//
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const searchNum = text.match(/\d+/g);
const sum = (+searchNum[0] + +searchNum[2]) * 12 + +searchNum[1];
console.log(sum);