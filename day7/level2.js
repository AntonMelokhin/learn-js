//Execise 1
function solveLinEquation(a, b, c, x, y) {
  return a * x + b * y + c;
};
console.log(solveLinEquation(1, 2, 3, 4, 5));

//Execise 2
function solveQuadratic(a = 0, b = 0, c = 0) {
  if (a === 0) {
    return 'Not a quadratic equation'
  } else {

  const d = b * b - 4 * a * c;

  if (d < 0) {
    return {};
  } else if (d === 0) {
    const x = -b / (2 * a);
    return { x };
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return { x1, x2 };
  }
}
}
console.log(solveQuadratic());
console.log(solveQuadratic(0, 0, 0));
console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, -1, -2));
console.log(solveQuadratic(1, 7, 12));
console.log(solveQuadratic(1, 0, -4));
console.log(solveQuadratic(1, -1, 0));

//Execise 3
function printArray(arr){
    for(let i = 0; i  < arr.length; i++){
        console.log(arr[i]);
    }
}
let numbers = [1, 2, 4, 78, 12];
printArray(numbers);

//Execise 4
function showDateTime(now){
    now = new Date();
   const date = now.getDate();
   const month = now.getMonth() + 1;
   const year = now.getFullYear();
   const hours = now.getHours();
   const minutes = now.getMinutes();
    const fullDate = `${date}/${month}/${year} ${hours}:${minutes}`;
    console.log(fullDate);
}
showDateTime()

//Execise 5
function swapValues(x, y){
  let a = x;
  x = y;
  y = a;
  console.log(x, y);
}
swapValues(3, 4);
swapValues(4, 5);

//Execise 6
function reverseArray(arr) {
  let reversed = [];

  for (let i = 0; i < arr.length; i++) {
    reversed[arr.length - 1 - i] = arr[i];
  }

  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

//Execise 7
function capitalizeArray(arr){
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }

  return result;
}
console.log(capitalizeArray(['a','b','c']));

//Execise 8
function addItem(item) {
  let arr = [];
  arr.push(item);
  return arr;
}
console.log(addItem('pupupu'));

//Execise 9
function removeItem(arr, index) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      result.push(arr[i]);
    }
  }

  return result;
}
const num = [1, 2, 3, 4];
console.log(removeItem(num, 3));

//Execise 10
function sumOfNumbers(pipka) {
  let sum = 0;
  for (let i = 0; i <= pipka; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(3000));

//Execise 11
function sumOfOdds(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(15));

//Execise 12
function sumOfEven(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(11));

//Execise 13
function evensAndOdds(n) {
  let evens = 0;
  let odds = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log(`The number of odds are ${odds}.`);
  console.log(`The number of evens are ${evens}.`);
}
evensAndOdds(100);

//Execise 14
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(5, 10, 15, 20));

//Execise 15
function randomUserIp() {
  const ip = [];
  for (let i = 0; i < 4; i++) {
    const segment = Math.floor(Math.random() * 256);
    ip.push(segment);
  }
  return ip.join('.');
}
console.log(randomUserIp());
console.log(randomUserIp());

//Execise 16
function randomMacAddress() {
  const hexDigits = '0123456789ABCDEF';
  let mac = [];
  for (let i = 0; i < 6; i++) {
    let segment = '';
    for (let j = 0; j < 2; j++) {
      segment += hexDigits[Math.floor(Math.random() * 16)];
    }
    mac.push(segment);
  }
  return mac.join(':');
}
console.log(randomMacAddress());

//Execise 17
function randomHexaNumberGenerator() {
  const hexDigits = '0123456789ABCDEF';
  let hexa = '#';
  for (let i = 0; i < 6; i++) {
    hexa += hexDigits[Math.floor(Math.random() * 16)];
  }
  return hexa;
}
console.log(randomHexaNumberGenerator());

//Execise 18
function userIdGenerator() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 7; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
console.log(userIdGenerator());