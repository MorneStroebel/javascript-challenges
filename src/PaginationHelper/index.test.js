import { PaginationHelper } from "./index";

const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const helper = new PaginationHelper(collection, 10);
const emptyHelper = new PaginationHelper([], 10);

describe("Tests suite for paginationHelper sample test : 24 items with 10 per page", () => {
  it("Page and item count", () => {
    expect(helper.pageCount()).toBe(3);
    expect(helper.itemCount()).toBe(24);
  });

  it("PageItemCount", () => {
    expect(helper.pageItemCount(1)).toBe(10);
    expect(helper.pageItemCount(2)).toBe(4);
    expect(helper.pageItemCount(3)).toBe(-1);
  });

  it("Page index", () => {
    expect(helper.pageIndex(40)).toBe(-1);
    expect(helper.pageIndex(22)).toBe(2);
    expect(helper.pageIndex(3)).toBe(0);
    expect(helper.pageIndex(0)).toBe(0);
    expect(helper.pageIndex(-1)).toBe(-1);
    expect(helper.pageIndex(-23)).toBe(-1);
    expect(helper.pageIndex(-15)).toBe(-1);
  });

  it("empty collection", () => {
    expect(emptyHelper.pageCount()).toBe(0);
    expect(emptyHelper.itemCount()).toBe(0);
    expect(emptyHelper.pageIndex(0)).toBe(-1);
    expect(emptyHelper.pageItemCount(0)).toBe(-1);
  });
});
