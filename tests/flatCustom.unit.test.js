/**
 * Services
 */
const {flatCustom} = require('../tasks/flatCustom');

describe('Custom array method (prototype) for flat arrays', () => {
    it('should flat array without errors.', async () => {
        Array.prototype.flatCustom = flatCustom;
        const arr1 = [[2], 3, {}, [1, 2]];
        const arr2 = [2, 3, [[1, {a: "text"}], [[2]]], 5];
        const arr3 = [5, {a: 1}, [1, [3, {}, {c: "a", d: [2, 2]}], [[6]]]];

        // Check actual result;
        expect(arr1.flatCustom())
            .toEqual([2, 3, 1, 2]);
        expect(arr2.flatCustom())
            .toEqual([2, 3, 1, "text", 2, 5]);
        expect(arr3.flatCustom())
            .toEqual([5, 1, 1, 3, "a", 2, 2, 6]);
    });
});
