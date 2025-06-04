"use strict";
// Question: Pagination Helper Class
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationHelper = void 0;
// You are asked to create a JavaScript class, PaginationHelper,
// that helps manage pagination for large collections of items.
// The PaginationHelper class should provide methods to retrieve
// information about pagination based on a list of
// items and a specified number of items per page.
// Requirements:
// 1.	Constructor
// 	    •	The PaginationHelper class should have a constructor that takes two arguments:
//      •	items (an array): The collection of items to paginate.
// 	    •	itemsPerPage (an integer): The number of items that should appear on each page.
// 2.	Methods
// Implement the following methods:
//     •	itemCount()
// 	•	Returns the total number of items in the collection.
// 	•	pageCount()
// 	•	Returns the total number of pages.
// 	•	pageItemCount(pageIndex)
// 	•	Takes a pageIndex (zero-based) and returns the number of items on that page.
// 	•	If the pageIndex is out of range, return -1.
// 	•	pageIndex(itemIndex)
// 	•	Takes an itemIndex and returns the page number where that item is located.
// 	•	If the itemIndex is out of range, return -1.
// Example Usage:
// const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
//
// helper.pageCount();      // should return 2
// helper.itemCount();      // should return 6
// helper.pageItemCount(0); // should return 4 (first page has 4 items)
// helper.pageItemCount(1); // should return 2 (second page has 2 items)
// helper.pageItemCount(2); // should return -1 (invalid page index)
//
// helper.pageIndex(5);     // should return 1 (itemIndex 5 is on the second page)
// helper.pageIndex(2);     // should return 0 (itemIndex 2 is on the first page)
// helper.pageIndex(20);    // should return -1 (invalid item index)
// helper.pageIndex(-10);   // should return -1 (invalid item index)
// Notes:
//
//     •	Be mindful of edge cases such as empty arrays, and invalid page or item indexes.
// 	   •	Aim to make your class efficient in terms of time and space complexity.
var PaginationHelper = /** @class */ (function () {
    function PaginationHelper(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    // Returns the total number of items in the collection
    PaginationHelper.prototype.itemCount = function () {
        return this.collection.length;
    };
    // Returns the total number of pages
    PaginationHelper.prototype.pageCount = function () {
        var numOfItems = this.itemCount();
        return Math.ceil(numOfItems / this.itemsPerPage);
    };
    // Returns the number of items on the given page
    // pageIndex is zero-based
    PaginationHelper.prototype.pageItemCount = function (pageIndex) {
        var pageCount = this.pageCount();
        if (pageIndex < 0 || pageIndex >= pageCount)
            return -1;
        if (pageIndex === pageCount - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }
        return this.itemsPerPage;
    };
    // Returns the page index of the item at the given itemIndex
    // itemIndex is zero-based
    PaginationHelper.prototype.pageIndex = function (itemIndex) {
        var numOfItems = this.itemCount();
        if (itemIndex < 0 || itemIndex >= numOfItems)
            return -1;
        return Math.floor(itemIndex / this.itemsPerPage);
    };
    return PaginationHelper;
}());
exports.PaginationHelper = PaginationHelper;
