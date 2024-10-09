import {multiplicativePersistence} from "./index";

describe("MultiplicativePersistence", () => {
    test('999', () => {
        expect(multiplicativePersistence(999)).toEqual(3)
    })
    test('39', () => {
        expect(multiplicativePersistence(39)).toEqual(2)
    })
    test('1', () => {
        expect(multiplicativePersistence(1)).toEqual(-1)
    })
})

