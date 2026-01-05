//Execise 1
function fullName(name, surname){
    console.log(name + surname)
};
fullName('Anton', ' Melokhin');

//Execise 2
function fullName(firstName, lastName){
    console.log(firstName + lastName)
};
fullName('Anton ', 'Melokhin');

//Execise 3
function addNumbers(a, b){
    console.log(a + b)
}
addNumbers(18, 9);

//Execise 4
function calcArea(a, b){
    return a * b;
}
console.log(calcArea(12, 13));

//Execise 5

function calcPrmtr(a, b){
    return (a + b) * 2
};
console.log(calcPrmtr(12, 13));

//Execise 6
function volumeOfRectPrism(a, b, c){
    return a * b * c
};
console.log(volumeOfRectPrism(2, 5, 8));

//Execise 7
function areaOfCircle(r){
    const p = 3.14;
    return p * r * r
};
console.log(areaOfCircle(12, 13));

//Execise 8
function circumOfCircle(r){
    const p = 3.14;
    return 2 * p * r
};
console.log(circumOfCircle(5));

//Execise 9
function density(m, v){
    return m / v
};
console.log(density(12, 3));

//Execise 10
function speed(t, s){
    v = s / t
    console.log(v)
};
speed(2, 140);

//Execise 11
function weight(m){
    const g = 9;
    w = m * g;
    console.log(w)
};
weight(12);

//Execise 12
function convertCelsiusToFahrenheit(oC){
    const k = 9 / 5;
    oF = (oC * k) + 32;
    console.log(oF);
};
convertCelsiusToFahrenheit(15);

//Execise 13
function calcBMI(weight, height){
    let bmi = weight / (height * height)
    if (bmi < 18.5){
        console.log('Underweight')
    } else if (bmi <= 24.9){
        console.log('Normal weight')
    } else if (bmi <= 29.9){
        console.log('Overweight')
    } else {
        console.log('Obese')
    }
}
calcBMI(55, 1.63);

//Execise 14
function checkSeason(monthPar){
    month = monthPar.toLowerCase();
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
}
checkSeason('ApRil');
checkSeason('AugusT');

//Execise 15
function findMax(a, b, c){
    x = Math.max(a, b, c);
    return x
};
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));