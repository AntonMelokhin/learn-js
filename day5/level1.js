//Execise 1
const arr = [];
console.log(arr);

//Execise 2
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1);

//Execise 3
arr1Lenght = arr1.length;
console.log(arr1Lenght);

//Execise 4
const arr1FirstIndex = arr1[0];
const arr1MiddleIndex = arr1[4];
const arr1LastIndex = arr1[8];
console.log(arr1FirstIndex, arr1MiddleIndex, arr1LastIndex);

//Execise 5
const mixDataTypes = [
    arr1FirstIndex,
    "DataTypes",
    15,
    true,
    null,
    {name: 'John'},
    arr1
];
console.log(mixDataTypes);

//Execise 6
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];

//Execise 7
console.log(itCompanies);

//Execise 8
console.log(itCompanies.length);

//Execise 9
console.log(itCompanies[0], itCompanies[6/2], itCompanies[6]);

//Execise 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//Execise 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//Execise 12
console.log(`${itCompanies} are big IT companies`);
//or
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`);

//Execise 13
// const enteringItCompanies = prompt('Enter IT companie');
// const lowerItCompanies = itCompanies.toLowerCase();
// const lowerEnteringItComp = enteringItCompanies.toLocaleLowerCase();
// lowerItCompanies.includes(lowerEnteringItComp)
// ? console.log(enteringItCompanies)
// : console.log('not found');

const apple = 'Apple';
const mozilla = 'Mozilla';
itCompanies.includes(apple)
? console.log(apple)
: console.log('not found');

itCompanies.includes(mozilla)
? console.log(mozilla)
: console.log('not found');

//Execise 14
//?

//Execise 15
itCompanies.sort();
console.log(itCompanies);

//Execise 16
itCompanies.reverse();
console.log(itCompanies);

//Execise 17
const firstThreeComp = itCompanies.slice(0, 3);
console.log(firstThreeComp);

//Execise 18
const lastThreeComp = itCompanies.slice(4, 7);
console.log(lastThreeComp);

//Execise 19
const lengthComp = itCompanies.length;
let middleCompanies;
if (lengthComp % 2 === 0) {
  const mid1 = lengthComp / 2 - 1
  const mid2 = lengthComp / 2 + 1
  middleCompanies = itCompanies.slice(mid1, mid2)
} else {
  const mid = Math.floor(lengthComp / 2)
  middleCompanies = itCompanies.slice(mid, mid + 1)
};
console.log(middleCompanies);

//Execise 20
const removedComp = itCompanies.shift();
console.log(removedComp);
console.log(itCompanies);

//Execise 21
const lengthComp2 = itCompanies.length;
if (lengthComp2 % 2 === 0) {
  const mid3 = lengthComp2 / 2 - 1;
  const removed = itCompanies.splice(mid3, 2);
  console.log(removed);
} else {
  const mid3 = Math.floor(lengthComp2 / 2);
  const removed = itCompanies.splice(mid3, 1);
  console.log(removed);
}
console.log(itCompanies);

//Execise 22
const lastComp = itCompanies.pop();
console.log(lastComp);
console.log(itCompanies);

//Execise 23
const removeAll = itCompanies.splice(0, itCompanies.length);
console.log(removeAll);
console.log(itCompanies);
