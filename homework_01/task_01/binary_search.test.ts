import { binarySearch } from './binary_search';

describe('binarySearch', () => {
    test('should return -1 for an empty array', () => {
        expect(binarySearch([], 1)).toBe(-1);
    });

    test('should return the index for a single-element array when the target is present', () => {
        expect(binarySearch([1], 1)).toBe(0);
    });

    test('should return -1 for a single-element array when the target is not present', () => {
        expect(binarySearch([1], 2)).toBe(-1);
    });

    test('should return the correct index when the target is present in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    });

    test('should return -1 when the target is not present in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });

    test('should return the correct index for the first element', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    });

    test('should return the correct index for the last element', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    test('should return -1 for a target less than the smallest element', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
    });

    test('should return -1 for a target greater than the largest element', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });
});