//Execise 1
const dog = {};

//Execise 2
console.log(dog);

//Execise 3
dog.name = 'Boldie';
dog.legs = 4;
dog.color = 'black';
dog.age = 2;
dog.bark = function() {
    return 'woof woof'
};

//Execise 4
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//Execise 5
dog.breed = 'Pit bull';
dog.getDogInfo = function(){
    return `${dog.name} is a ${dog.breed}. It has ${dog.legs} legs, is ${dog.color} in color and is ${dog.age} years old.`;
};

console.log(dog.getDogInfo());

