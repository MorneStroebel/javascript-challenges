"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MultiplicativePersistence_1 = require("./src/MultiplicativePersistence");
// 1. Multiplicative Persistence challenge
var inputValue = 999;
var multiplicativePersistenceValue = (0, MultiplicativePersistence_1.multiplicativePersistence)(inputValue);
console.log('\n\n1. Multiplicative Persistence challenge');
console.log('================================================');
console.log('Input Number: ', inputValue);
console.log('Number of times Run: ', multiplicativePersistenceValue);
console.log('================================================');
