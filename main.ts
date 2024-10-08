import {multiplicativeWithCountClear} from "./src/MultiplicativePersistence";

// 1. Multiplicative Persistence challenge
const inputValue: number = 999
const multiplicativePersistenceValue: number = multiplicativeWithCountClear(inputValue)
console.log('\n\n1. Multiplicative Persistence challenge');
console.log('================================================')
console.log('Input Number: ', inputValue);
console.log('Number of times Run: ', multiplicativePersistenceValue)
console.log('================================================')