//Execise 1
import { countries } from './countries_data.js'

console.table(countries)

//Execise 2
console.table(countries[0])

//Execise 3
console.group('Country Details')

console.log('Name:', countries[0].name)
console.log('Capital:', countries[0].capital)
console.log('Population:', countries[0].population)
console.log('Languages:', countries[0].languages)

console.groupEnd()
