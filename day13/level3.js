//Execise 1
const arr = []
for (let i = 0; i < 1_000_000; i++) {
  arr.push(i)
}

// while
console.time('while')
let i = 0
while (i < arr.length) {
  i++
}
console.timeEnd('while')

// for
console.time('for')
for (let i = 0; i < arr.length; i++) {}
console.timeEnd('for')

// for...of
console.time('for...of')
for (const num of arr) {}
console.timeEnd('for...of')

// forEach
console.time('forEach')
arr.forEach(() => {})
console.timeEnd('forEach')
