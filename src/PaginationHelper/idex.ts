export class PaginationHelper {
    collection: any[]
    itemsPerPage: number

    constructor(collection: any[], itemsPerPage: number) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    // Returns the total number of items in the collection
    itemCount() {
        return this.collection.length;
    }

    // Returns the total number of pages
    pageCount() {
        const numOfItems = this.itemCount()
        return Math.ceil(numOfItems / this.itemsPerPage)
    }

    // Returns the number of items on the given page
    // pageIndex is zero-based
    pageItemCount(pageIndex: number) {
        const pageCount = this.pageCount()
        if (pageIndex < 0 || pageIndex >= pageCount) return -1;
        if (pageIndex === pageCount - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }
        return this.itemsPerPage;
    }

    // Returns the page index of the item at the given itemIndex
    // itemIndex is zero-based
    pageIndex(itemIndex: number) {
        const numOfItems = this.itemCount()
        if (itemIndex < 0 || itemIndex >= numOfItems) return -1
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}