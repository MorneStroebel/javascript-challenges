## Codewars Challenges

A growing collection of algorithm challenges solved using TypeScript, primarily sourced from Codewars.
This repository is structured for clarity and includes test cases for each solution. More challenges will be added
regularly to expand the collection and improve problem-solving skills.

## Challenges

### 1. Multiplicative Persistence challenge

Multiplicative persistence refers to the number of times you must multiply the digits of a number until you reach a
single-digit number.

#### How to calculate

1. Take a number (e.g., 39).
2. Multiply its digits (e.g., 3 * 9 = 27).
3. If the result has more than one digit, repeat the process (e.g., 2 * 7 = 14, then 1 * 4 = 4).
4. The number of times you perform this operation to reach a single digit is the multiplicative persistence.

- Example
    - Number: 39
    - Step 1: 3 * 9 = 27
    - Step 2: 2 * 7 = 14
    - Step 3: 1 * 4 = 4
    - Result: Multiplicative persistence of 39 is 3 (because it took 3 steps to reach a single-digit number).

### 2. PaginationHelper

You are asked to create a JavaScript class, PaginationHelper,
that helps manage pagination for large collections of items.
The PaginationHelper class should provide methods to retrieve
information about pagination based on a list of items and a specified number of items per page.

- #### Requirements:
1. Constructor
    - The PaginationHelper class should have a constructor that takes two arguments:
    - items (an array): The collection of items to paginate.
    - itemsPerPage (an integer): The number of items that should appear on each page.
2. Methods
    - Implement the following methods:
       - itemCount()
          - Returns the total number of items in the collection. 
       - pageCount()
          - Returns the total number of pages.
       - pageItemCount(pageIndex)
          - Takes a pageIndex (zero-based) and returns the number of items on that page. 
          - If the pageIndex is out of range, return -1. 
       - pageIndex(itemIndex)
          - Takes an itemIndex and returns the page number where that item is located. 
          - If the itemIndex is out of range, return -1.

- Example Usage:
   - const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4); 
   - helper.pageCount(); // should return 2 
   - helper.itemCount(); // should return 6 
   - helper.pageItemCount(0); // should return 4 (first page has 4 items)
   - helper.pageItemCount(1); // should return 2 (second page has 2 items)
   - helper.pageItemCount(2); // should return -1 (invalid page index)
   - helper.pageIndex(5); // should return 1 (itemIndex 5 is on the second page)
   - helper.pageIndex(2); // should return 0 (itemIndex 2 is on the first page)
   - helper.pageIndex(20); // should return -1 (invalid item index)
   - helper.pageIndex(-10); // should return -1 (invalid item index)

- #### Notes:
  - Be mindful of edge cases such as empty arrays, and invalid page or item indexes. 
  - Aim to make your class efficient in terms of time and space complexity.

## How to run:
1. Open the main.ts file and uncomment the section you want to get answers from
2. run the following in your root dir 
```
 tsc main.ts && node main.js
```