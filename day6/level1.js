//Execise 1
for (let i = 0; i <= 10; i++) {
    console.log(i)
};

//Execise 2
let i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

//Execise 3
let n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
};

//Execise 4
let p = '';
for (let i = 1; i <= 7; i++) {
  p += '#';
  console.log(p);
};

//Execise 5
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
};

//Execise 6
console.log("i    i^2   i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}     ${i ** 3}`);
};

//Execise 7
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
};

//Execise 8
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
};

//Execise 9
for (let num = 2; num <= 100; num++) {
  let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
};

//Execise 10
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//Execise 11
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
};
console.log(`The sum of all evens from 0 to 100 is ${sumEvens} and the sum of all odds from 0 to 100 is ${sumOdds}`);

//Execise 12
console.log([sumEvens, sumOdds]);

//Execise 13
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
};
console.log(randomNumbers);

//Execise 14
let uniqueNumbers = [];
while (uniqueNumbers.length < 5) {
  let randomNum = Math.floor(Math.random() * 100); // 0–99

  if (!uniqueNumbers.includes(randomNum)) {
    uniqueNumbers.push(randomNum);
  }
};
console.log(uniqueNumbers);

//Execise 15
let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  randomId += chars[randomIndex];
};
console.log(randomId);