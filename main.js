"use strict";
// 1. Multiplicative Persistence challenge
// const inputValue: number = 999
// const multiplicativePersistenceValue: number = multiplicativePersistence(inputValue)
// console.log('\n\n1. Multiplicative Persistence challenge');
// console.log('================================================')
// console.log('Input Number: ', inputValue);
// console.log('Number of times Run: ', multiplicativePersistenceValue)
// console.log('================================================')
Object.defineProperty(exports, "__esModule", { value: true });
// 2. PaginationHelper
var PaginationHelper_1 = require("./src/PaginationHelper");
var collection = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24,
];
var helper = new PaginationHelper_1.PaginationHelper(collection, 10);
var itemCount = helper.itemCount();
var numberOfPages = helper.pageCount();
var pageItemCount = helper.pageItemCount(2);
var itemPage = helper.pageIndex(20);
console.log("\n\n2. PaginationHelper challenge");
console.log("============================================");
console.log("Total items:", itemCount);
console.log("Number of pages:", numberOfPages);
console.log("Number of items on page:", pageItemCount);
console.log("Item page number:", itemPage);
console.log("============================================");
