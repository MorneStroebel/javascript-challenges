"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicativePersistence = multiplicativePersistence;
{ /*
    Multiplicative persistence refers to the number of times you must multiply the digits of a number until you reach a single-digit number. To calculate it, you:
        1.	Take a number (e.g., 39).
        2.	Multiply its digits (e.g., 3 * 9 = 27).
        3.	If the result has more than one digit, repeat the process (e.g., 2 * 7 = 14, then 1 * 4 = 4).
        4.	The number of times you perform this operation to reach a single digit is the multiplicative persistence.

    For example:
        •	Number: 39
        •	Step 1: 3 * 9 = 27
        •	Step 2: 2 * 7 = 14
        •	Step 3: 1 * 4 = 4
        •	Result: Multiplicative persistence of 39 is 3 (because it took 3 steps to reach a single-digit number).

*/
}
function multiplicativePersistence(num) {
    if (num < 10)
        return -1;
    var stingNumber = Math.abs(num).toString();
    var product = stingNumber.split('').reduce(function (total, x) {
        return total * Number(x);
    }, 1);
    return 1 + multiplicativePersistence(product);
}
