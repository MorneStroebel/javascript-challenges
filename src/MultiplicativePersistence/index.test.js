import {multiplicativeWithCountClear} from "./index";

describe("MultiplicativePersistence", () => {
    test('999', () => {
        expect(multiplicativeWithCountClear(999)).toEqual(4)
    })
    test('39', () => {
        expect(multiplicativeWithCountClear(39)).toEqual(3)
    })
    test('1', () => {
        expect(multiplicativeWithCountClear(1)).toEqual(-1)
    })
})

