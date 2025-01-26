class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null = null;

    // Insert at the end
    insert(value: T): void {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Delete a node by value
    delete(value: T): void {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next === null) {
            return;
        }

        current.next = current.next.next;
    }

    // Traverse and print the list
    traverse(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Search for a node by value
    search(value: T): ListNode<T> | null {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

// Example usage:
const list = new LinkedList<number>();
list.insert(1);
list.insert(2);
list.insert(3);
list.traverse(); // Output: 1 2 3
list.delete(2);
list.traverse(); // Output: 1 3
console.log(list.search(3)); // Output: Node { value: 3, next: null }
console.log(list.search(4)); // Output: null

export { ListNode, LinkedList };