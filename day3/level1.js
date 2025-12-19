//Execise 1
const firstName = "Anton";
const lastName = "Melokhin";
const country = "Ukraine";
const city = "Dunaivtsy";
const age = 23;
const isMaried = true;
const year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMaried);
console.log(typeof year);

//Execise 2
const ten = '10'; 
console.log(typeof(10) == typeof(ten));

//Execise 3
const num = '9.8';
console.log(parseInt(num) == 10);

//Execise 4
console.log(Boolean(age));
console.log(Boolean(firstName));
console.log(Boolean(10));

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(''));

//Execise 5
const a = 4;
const b = 3;
console.log(a > b);        // true
console.log(a >= b);       // true
console.log(a < b);        // false
console.log(a <= b);       // false
console.log(a == 4);       // true
console.log(a === 4);      // true
console.log(a != 4);       // false
console.log(a !== 4);      // false
console.log(a != '4');     // false
console.log(a == '4');     // true
console.log(a === '4');    // false

console.log('python'.length !== 'jargon'.length); // false

//Execise 6
console.log(4 > 3 && 10 < 12);       // true
console.log(4 > 3 && 10 > 12);       // false
console.log(4 > 3 || 10 < 12);       // true
console.log(4 > 3 || 10 > 12);       // true
console.log(!(4 > 3));               // false
console.log(!(4 < 3));               // true
console.log(!(false));               // true
console.log(!(4 > 3 && 10 < 12));    // false
console.log(!(4 > 3 && 10 > 12));    // true
console.log(!(4 === '4'));           // true

console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false

//Execise 7
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Math.floor(now.getTime() / 1000));


