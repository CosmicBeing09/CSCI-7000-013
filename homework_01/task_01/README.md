# Prompts and Answers

## Prompt 1

**User's Question:**

Write the Binary Search implementation inside the "taks_01" directory under the "homework_01" directory.

Put the Binary Search implementation file as "binary_search.ts".

Cover all the corner cases for the implementation.

**Answer:**

Here is the file you requested: `homework_01/taks_01/binary_search.ts`

---

## Prompt 2

**User's Question:**

Now write the Binary Search implementation inside that file. Cover all the corner cases for the implementation.

**Answer:**

Here is the implementation of the Binary Search algorithm in TypeScript, covering all corner cases:

```typescript
export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}
```

## Prompt 3

**User's Question:**

Now write test cases to test the Binary Search implementation.

Write in a different file and the test file will be run with Jest framework.

**Answer:**

Sure, here is the test file for the Binary Search implementation using the Jest framework:


```typescript
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
```

To run these tests, make sure you have Jest installed and configured in your project. You can run the tests using the following command in your terminal:

``` npx jest ```


## Prompt 4

**User's Question:**

Configure Jest in the "task_01" folder. Jest is already installed.

**Answer:**

To configure Jest in the `task_01` folder, follow these steps:

### Initialize Jest Configuration

Create a Jest configuration file in the `task_01` folder.

### Update `package.json`

Ensure that the `package.json` file in the `task_01` folder has the necessary scripts to run Jest.

---

### Create Jest Configuration File

Create a file named `jest.config.js` in the `task_01` folder with the following content:

```javascript
module.exports = {
    roots: ['<rootDir>'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
```

## Prompt 5

**User's Question:**

Scan the project directory and write the Jest config file accordingly.

**Answer:**

To scan the project directory and write the Jest configuration file accordingly, I'll assume the structure you provided and create a `jest.config.js` file that matches your setup.

---

### Project Directory Structure
```
homework_01
  └── task_01/
      ├── binary_search.ts
      ├── binary_search.test.ts
      ├── jest.config.js
``` 
