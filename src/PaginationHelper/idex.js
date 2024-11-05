"use strict";
// export class PaginationHelper {
//     collection: any[]
//     itemsPerPage: number
//     constructor(collection: any[], itemsPerPage: number) {
//         // The constructor takes in an array of items and a integer indicating how many
//         // items fit within a single page
//         this.collection = collection
//         this.itemsPerPage = itemsPerPage
//     }
//     itemCount() {
//         // returns the number of items within the entire collection
//         return this.collection.length
//     }
//     pageCount() {
//         // returns the number of pages
//        const numOfItems = this.itemCount()
//         return Math.ceil(numOfItems / thi s.itemsPerPage)
//     }
//     pageItemCount(pageIndex: number) {
//         // returns the number of items on the current page. page_index is zero based.
//         // this method should return -1 for pageIndex values that are out of range
//         const numberOfPages = this.pageCount()
//         const start = pageIndex * this.itemsPerPage
//         const end = pageIndex * this.itemsPerPage + this.itemsPerPage
//         if (pageIndex >= numberOfPages) return -1
//         return this.collection.slice(start, end).length
//
//     }
//     pageIndex(itemIndex: number) {
//         // determines what page an item is on. Zero based indexes
//         // this method should return -1 for itemIndex values that are out of range
//         const numOfPages = this.pageCount()
//         const itemPage = Math.floor(itemIndex / this.itemsPerPage)
//         if (itemPage > numOfPages || itemPage < 0 || this.collection.length === 0) return -1
//         return itemPage
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationHelper = void 0;
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
            console.log(this.collection.length % this.itemsPerPage);
            console.log(this.collection.length % this.itemsPerPage || this.itemsPerPage);
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
