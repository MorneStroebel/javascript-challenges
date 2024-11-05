

// 1. Multiplicative Persistence challenge
// const inputValue: number = 999
// const multiplicativePersistenceValue: number = multiplicativePersistence(inputValue)
// console.log('\n\n1. Multiplicative Persistence challenge');
// console.log('================================================')
// console.log('Input Number: ', inputValue);
// console.log('Number of times Run: ', multiplicativePersistenceValue)
// console.log('================================================')

// 2. PaginationHelper
import {PaginationHelper} from "./src/PaginationHelper/idex";

const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const helper = new PaginationHelper(collection, 10);
const itemCount = helper.itemCount();
const numberOfPages = helper.pageCount();
const pageItemCount = helper.pageItemCount(2);
const itemPage = helper.pageIndex(20);
console.log("\n\n2. PaginationHelper challenge");
console.log("============================================");
console.log("Total items:", itemCount);
console.log("Number of pages:", numberOfPages);
console.log("Number of items on page:", pageItemCount);
console.log("Item page number:", itemPage);
console.log("============================================");
