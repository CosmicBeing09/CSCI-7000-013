import { LinkedList } from '../linked_list';

describe('LinkedList', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
    });

    test('should insert elements correctly', () => {
        list.insert(1);
        list.insert(2);
        list.insert(3);

        const values: number[] = [];
        let current = list.head;
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }

        expect(values).toEqual([1, 2, 3]);
    });

    test('should delete elements correctly', () => {
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.delete(2);

        const values: number[] = [];
        let current = list.head;
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }

        expect(values).toEqual([1, 3]);
    });

    test('should handle deleting the head correctly', () => {
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.delete(1);

        const values: number[] = [];
        let current = list.head;
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }

        expect(values).toEqual([2, 3]);
    });

    test('should handle deleting a non-existent element correctly', () => {
        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.delete(4);

        const values: number[] = [];
        let current = list.head;
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }

        expect(values).toEqual([1, 2, 3]);
    });

    test('should handle deletion from an empty list gracefully', () => {
        list.delete(1);
        expect(list.head).toBeNull();
    });

    test('should create a linked list and check with a pre-initialized list', () => {
        const preInitializedValues = [1, 2, 3, 4, 5];
        preInitializedValues.forEach(value => list.insert(value));

        const values: number[] = [];
        let current = list.head;
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }

        expect(values).toEqual(preInitializedValues);
    });
});